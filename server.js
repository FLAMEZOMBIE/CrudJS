const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({ "massage": "Welcome To The Hell" });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

const dbConfig = require('./config/config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url).then(() => {
    console.log("Sukses terKonek");
}).catch(err => {
    console.log('Error tidak ada database');
    process.exit();
});