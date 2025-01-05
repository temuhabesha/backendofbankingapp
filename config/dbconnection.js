const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()

const dbconnection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    database:process.env.DB_NAME,
    password:process.env.PASSWORD
})
dbconnection.connect(()=>{
    console.log(`the database is connected to the server successfully in database name ${process.env.DB_NAME}`)
})
module.exports = dbconnection;