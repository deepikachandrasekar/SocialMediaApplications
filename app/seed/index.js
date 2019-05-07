const mysql_import = require('mysql-import');
const mysqlConfig = require('../config.json').mysql;
var db = require('promise-mysql');


/** ******
 Used to Import the mysql Dump file
  ******* */
const importer = mysql_import.config({
  host: mysqlConfig.host,
  user: mysqlConfig.username,
  port: mysqlConfig.port,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
  onerror: err => console.log(err.message)
});
var connection;
/** ******
 DB connection to create a database
  ******* */
db.createConnection({
  host: mysqlConfig.host,
  user: mysqlConfig.username,
  port: mysqlConfig.port,
  password: mysqlConfig.password,
  database: 'mysql'
}).then(function (conn) {
  connection = conn;
  /** ******
Database  is dropped
  ******* */
  return connection.query('DROP DATABASE IF EXISTS deepika_college_data;');
}).then(function () {
    /** ******
Database  is created
  ******* */
  return connection.query('CREATE DATABASE  deepika_college_data;');
}).then(function () {
  connection.end();
    /** ******
Database  Dump is restored
  ******* */
  importer.import(__dirname + '/seed.sql').then(() => {
    console.log('deepika_college_data has finished importing')
    return process.exit(0);
  });
}).catch(function (error) {
  if (connection && connection.end) connection.end();
  console.log(error);
});
