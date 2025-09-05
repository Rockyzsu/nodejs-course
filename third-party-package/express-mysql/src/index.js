require('dotenv').config();
const express = require('express');
const mysql = require('mysql2'); // 使用回调版本的mysql2
const Joi = require('joi');

const app = express();
app.use(express.json());

// 数据库连接配置
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'your_password',
  database: process.env.DB_NAME || 'account_db',
  port: process.env.DB_PORT || 3306,
  connectionLimit: 10,
  queueLimit: 0
};

// 创建数据库连接池
const pool = mysql.createPool(dbConfig);

// 测试数据库连接
pool.getConnection((err, connection) => {
  if (err) {
    console.error('MySQL connection failed:', err.message);
    process.exit(1);
  }
  console.log('MySQL database connected successfully');
  connection.release();
});

// 参数验证规则
const balanceUpdateSchema = Joi.object({
  accountId: Joi.number().integer().positive().required(),
  amount: Joi.number().precision(2).required(),
  remark: Joi.string().max(100).allow('')
});

/**
 * 更新账号余额 API (使用回调方式)
 * POST /api/account/update-balance
 */
app.post('/api/account/update-balance', (req, res) => {
  // 步骤1: 参数验证
  const { error, value } = balanceUpdateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Invalid request parameters',
      detail: error.details[0].message
    });
  }
  const { accountId, amount, remark } = value;

  // 步骤2: 获取数据库连接
  pool.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Failed to connect to database',
        detail: err.message
      });
    }

    // 步骤3: 开始事务
    connection.beginTransaction((err) => {
      if (err) {
        connection.release();
        return res.status(500).json({
          success: false,
          message: 'Failed to start transaction',
          detail: err.message
        });
      }

      // 步骤4: 查询账号信息并加行锁
      connection.query(
        'SELECT id, balance, status FROM accounts WHERE id = ? FOR UPDATE',
        [accountId],
        (err, accountRows) => {
          if (err) {
            connection.rollback(() => {
              connection.release();
              return res.status(500).json({
                success: false,
                message: 'Failed to query account',
                detail: err.message
              });
            });
            return;
          }

          // 验证账号是否存在
          if (accountRows.length === 0) {
            connection.rollback(() => {
              connection.release();
              return res.status(404).json({
                success: false,
                message: 'Account not found'
              });
            });
            return;
          }

          const account = accountRows[0];
          
          // 验证账号状态
          if (account.status !== 1) {
            connection.rollback(() => {
              connection.release();
              return res.status(403).json({
                success: false,
                message: 'Account is frozen or inactive'
              });
            });
            return;
          }

          // 步骤5: 验证余额是否充足
          // const newBalance = parseFloat((account.balance + amount).toFixed(2));
          const newBalance = parseFloat((Number(account.balance) + Number(amount)).toFixed(2));

          if (newBalance < 0) {
            connection.rollback(() => {
              connection.release();
              return res.status(400).json({
                success: false,
                message: 'Insufficient balance',
                currentBalance: account.balance
              });
            });
            return;
          }

          // 步骤6: 更新账号余额
          connection.query(
            'UPDATE accounts SET balance = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
            [newBalance, accountId],
            (err) => {
              if (err) {
                connection.rollback(() => {
                  connection.release();
                  return res.status(500).json({
                    success: false,
                    message: 'Failed to update balance',
                    detail: err.message
                  });
                });
                return;
              }

              // 步骤7: 记录余额变动日志
              connection.query(
                `INSERT INTO account_balance_logs 
                 (account_id, before_balance, change_amount, after_balance, remark, created_at)
                 VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
                [accountId, account.balance, amount, newBalance, remark || ''],
                (err) => {
                  if (err) {
                    connection.rollback(() => {
                      connection.release();
                      return res.status(500).json({
                        success: false,
                        message: 'Failed to record balance log',
                        detail: err.message
                      });
                    });
                    return;
                  }

                  // 步骤8: 提交事务
                  connection.commit((err) => {
                    if (err) {
                      connection.rollback(() => {
                        connection.release();
                        return res.status(500).json({
                          success: false,
                          message: 'Failed to commit transaction',
                          detail: err.message
                        });
                      });
                      return;
                    }

                    // 步骤9: 处理成功响应
                    connection.release();
                    res.status(200).json({
                      success: true,
                      message: 'Balance updated successfully',
                      data: {
                        accountId,
                        beforeBalance: account.balance,
                        changeAmount: amount,
                        afterBalance: newBalance,
                        updateTime: new Date().toISOString()
                      }
                    });
                  });
                }
              );
            }
          );
        }
      );
    });
  });
});


app.post('/api/account/update-balance-no-tx', (req, res) => {
  const { error, value } = balanceUpdateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Invalid request parameters',
      detail: error.details[0].message
    });
  }
  const { accountId, amount, remark } = value;

  pool.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Failed to connect to database',
        detail: err.message
      });
    }

    // 查询账号信息
    connection.query(
      'SELECT id, balance, status FROM accounts WHERE id = ?',
      [accountId],
      (err, accountRows) => {
        if (err) {
          connection.release();
          return res.status(500).json({
            success: false,
            message: 'Failed to query account',
            detail: err.message
          });
        }

        if (accountRows.length === 0) {
          connection.release();
          return res.status(404).json({
            success: false,
            message: 'Account not found'
          });
        }

        const account = accountRows[0];
        if (account.status !== 1) {
          connection.release();
          return res.status(403).json({
            success: false,
            message: 'Account is frozen or inactive'
          });
        }

        const newBalance = parseFloat((Number(account.balance) + Number(amount)).toFixed(2));
        if (newBalance < 0) {
          connection.release();
          return res.status(400).json({
            success: false,
            message: 'Insufficient balance',
            currentBalance: account.balance
          });
        }

        // 更新余额
        connection.query(
          'UPDATE accounts SET balance = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
          [newBalance, accountId],
          (err) => {
            if (err) {
              connection.release();
              return res.status(500).json({
                success: false,
                message: 'Failed to update balance',
                detail: err.message
              });
            }

            // 记录日志
            connection.query(
              `INSERT INTO account_balance_logs 
                (account_id, before_balance, change_amount, after_balance, remark, created_at)
                VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
              [accountId, account.balance, amount, newBalance, remark || ''],
              (err) => {
                connection.release();
                if (err) {
                  return res.status(500).json({
                    success: false,
                    message: 'Failed to record balance log',
                    detail: err.message
                  });
                }
                return res.json({
                  success: true,
                  message: 'Balance updated successfully',
                  accountId,
                  beforeBalance: account.balance,
                  changeAmount: amount,
                  afterBalance: newBalance
                });
              }
            );
          }
        );
      }
    );
  });
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('API endpoint: POST /api/account/update-balance');
});
    