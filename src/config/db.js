const mongoose = require('mongoose');
require('dotenv').config();
//const mysql = require('mysql2/promise');
//const { MONGO_URI, MYSQL_URI } = require('../.env');

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  dbName: process.env.DB_NAME,
  
}).then(() => {
  console.log('mongodb connected.')
})
.catch((err) => console.log(err.message))

const mongoDB = mongoose.connection;

mongoDB.on('connected', () => {
  console.log('Mongoose connected to db')
})

mongoDB.on('error', console.error.bind(console, 'MongoDB connection error:'));

mongoDB.on('disconnected', () => {
  console.log('Mongoose connection is disconnected.')
})

process.on('SIGINT', async() => {
  await mongoose.connection.close()
  process.exit(0)
})

// // MySQL Connection
// const mysqlPool = mysql.createPool({
//   connectionLimit: 10,
//   host: MYSQL_URI.host,
//   user: MYSQL_URI.user,
//   password: MYSQL_URI.password,
//   database: MYSQL_URI.database,
//   waitForConnections: true,
//   queueLimit: 0,
// });

module.exports = { mongoDB,
  //mysqlPool 
  };
