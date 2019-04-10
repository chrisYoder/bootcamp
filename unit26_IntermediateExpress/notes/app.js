'use strict'
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('dog.html');
    // res.send('<h1>Welcome to the home page</h1><h2>blah blah blah</h2>');
});







app.listen(3000, process.env.IP, () => console.log('Server is spinning'));