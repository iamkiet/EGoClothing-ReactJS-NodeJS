var mysql = require('mysql');
let config = require('config');

let DB_CONFIG_LOCAL = config.get('Local.dbConfig');

var pool = mysql.createPool(DB_CONFIG_LOCAL);

module.exports = pool;