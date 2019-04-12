'use strict';
const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');

});


app.get('/youfellinlovewith/:thing', (req, res) => {
    let thing = req.params.thing;
    res.render('love', {thingVar: thing});
});

app.get('/posts', (req, res) => {
    let posts = [
        {title: 'How I Survived The Men in My Life', author: 'Sansa Stark'},
        {title: 'Conquer Like Me', author: 'Dany Targaryean'},
        {title: 'My Time as No One', author: 'Arya Stark'},
        {title: 'Kings Landing: A City of Brotherly Love', author: 'Cersei Lannister'}
    ];

    res.render('posts', {posts: posts});
});


app.listen(3000, process.env.IP, () => console.log('Server is spinning'));