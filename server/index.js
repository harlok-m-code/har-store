require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connect = require('./config/connect');
const router = require('./routes/index');
const path = require('path');
const fileupload = require('express-fileupload');
// const models = require('./model/model')

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileupload({}))
app.use('/', router)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`server started on ${PORT} port`)
        })
        await connect.sync();
        await connect.authenticate();
    } catch (error) {
        console.log(error)
    }
}

start()