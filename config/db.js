const mysql = require('mysql2')
require('dotenv').config()

const connect = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})


connect.getConnection(function (err, conn) {
    if (err) {
        console.log('Error connecting to database');
        return
    }
    console.log("Connected db successfully")
    // conn.release()
    connect.releaseConnection(conn)
});

module.exports = connect