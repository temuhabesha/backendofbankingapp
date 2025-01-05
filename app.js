const express = require('express')
const cors = require ('cors')
const dotenv = require('dotenv')
const dbconnection = require('./config/dbconnection.js')
dotenv.config();
const accountrouts = require('./routs/accountrout.js')


const app = express();

app.use(express.json())
app.use(cors())

app.use('/',accountrouts)

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log('the server is run in port number 3002')
})