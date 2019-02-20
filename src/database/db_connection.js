const { Pool } = require('pg');
const url = require('url');
require('dotenv').config();

const params = url.parse(process.env.DB_URL);

const options = {
  user: params.auth.split(':')[0],
  password: params.auth.split(':')[1],
  port: params.port,
  host: params.hostname,
  database: params.pathname.split('/')[1],
  ssl: params.hostname !== 'localhost',
  max: process.env.DB_MAX_CONNECTIONS || 2,
};

module.exports = new Pool(options);
