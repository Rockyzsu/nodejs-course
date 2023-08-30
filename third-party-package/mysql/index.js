require("dotenv").config();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.host,
  port: process.env.port,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

connection.connect((err) => {
  if (err) {
    console.log("error");
    console.log(err);
    return;
  }

  console.log("连接成功");
});

const sqlQuery = {
  count: "select count(*) as result from v2ex_content",
  content: "select * from v2ex_content",
  insert_v1: "insert into user values(?,?,?)",
  insert_v2: "insert into user (password,username,email)values(?,?,?)",
};
function queryDemo() {
  connection.query(sqlQuery.count, function (err, result) {
    if (err) {
      console.error(err);
      return;
    }
    ret = result[0].result;
    console.log(ret);
  });

  connection.query(sqlQuery.content, function (err, result) {
    if (err) {
      console.error(err);
      return;
    }

    const resultObj = result.map((row) => {
      return {
        id: row.id,
        ittle: row.title,
        user: row.user,
        create_ts: row.create_ts,
        title_detail: row.title_detail,
      };
    });
    console.log(resultObj);
  });
}


function insertDemo(){
    data=['root','123456','root@qq.com']
    connection.query(sqlQuery.insert_v1,data,(err,result)=>{
        if(err){console.log(err);return}

        console.log('insert passed!')
    })
}

function insertDemoV2(){
    data=['root','123456','root@qq.com']
    connection.query(sqlQuery.insert_v2,data,(err,result)=>{
        if(err){console.log(err);return}

        console.log('insert passed!')
    })
}
// queryDemo()
// insertDemo()
insertDemoV2()



connection.end((err) => {
  if (err) {
    console.log("close error");
  }else{console.log('closed successfully')}
});
