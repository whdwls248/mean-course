const express = require('express');

const app = express();

app.use((req, res, next) => {

    console.log('First Middeleware')
    next();
});

app.use((req, res, next) => {
    res.send('Response from express');
});

module.exports = app;