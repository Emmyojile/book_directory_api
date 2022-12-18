require('dotenv').config()

const express = require('express');
const app = express();
const connectDB = require('./db/connect')

const bodyparser = require('body-parser');

const port = 5000;

app.use(bodyparser.json());
app.use(express.json())


const start = async () => {
    try {
        await connectDB(process.env.mongo_uri)
        app.listen(port, () => console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()