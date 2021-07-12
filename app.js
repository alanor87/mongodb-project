const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Schema, model } = mongoose;

dotenv.config();

const app = express()
const { PORT = 3000, DB_HOST } = process.env;
const testSchema = Schema({
    name: String,
    last_name: String,
})

const Entry = model('woman', testSchema)

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT);
}).then(console.log('connected'));
