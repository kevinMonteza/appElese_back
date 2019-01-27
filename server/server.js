const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const Routes = require('../routes/router');

const app = express();



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(Routes);

mongoose.connect('mongodb://localhost:27017/elesedb', (err, res) => {
    if (err) throw err;

    console.log("Database online");
});



app.listen(3000, (res, req) => {
    console.log("Listening port 3000");
});