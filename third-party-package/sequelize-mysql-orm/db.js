require('dotenv').config()
env = process.env
var Sequelize = require('sequelize')
console.log('start')
//console.log(env)
const config = {
  host:env.host,
  port:env.port,
  user:env.user,
  password:env.paassword,
  db:env.db
}

var sequelize = new Sequelize(
  env.db,
  env.user,
  env.password,
  {
    host:env.host,
    port:env.port,
    dialect:'mysql',
    pool:{
      max:5,
      min:0,
      idle:10000
    }
  }
)


module.exports = sequelize;
