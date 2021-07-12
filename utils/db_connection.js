
const util = require('util');
const mysql = require("mysql");
const dbConfig = require("../config/db_config");

const sql = mysql.createConnection({
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE
});

const sqlQueryAsync = util.promisify(sql.query.bind(sql));

module.exports = {
  sql,
  sqlQueryAsync
};