const mysql_import = require('mysql-import');
const mysqlConfig = require('../config.json').mysql;
var db = require('promise-mysql');

const importer = mysql_import.config({
  host: mysqlConfig.host,
  user: mysqlConfig.username,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
  onerror: err => console.log(err.message)
});
var connection;

db.createConnection({
  host: mysqlConfig.host,
  user: mysqlConfig.username,
  password: mysqlConfig.password,
  database: 'mysql'
}).then(function (conn) {
  connection = conn;
  return connection.query('DROP DATABASE IF EXISTS deepika_college_data;');
}).then(function () {
  return connection.query('CREATE DATABASE  deepika_college_data;');
}).then(function () {
  connection.end();
  importer.import(__dirname + '/seed.sql').then(() => {
    console.log('deepika_college_data has finished importing')
    return process.exit(0);
  });
}).catch(function (error) {
  if (connection && connection.end) connection.end();
  console.log(error);
});