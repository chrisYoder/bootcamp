'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');


let friendsArray = ['Jon Snow', 'Tormund Giantsbane', 'Gendry Stone', 'Thoros of Myr', 'Sandor Clegane', 'Beric Dondarrion', 'Jorah Mormont', 'Daenerys Targerean', 'Benjen Stark'];

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/addfriend', (req, res) => {
    let newFriend = req.body.newFriend;
    friendsArray.push(newFriend);
    res.redirect('friends');
});

app.get('/friends', (req, res) => {
    res.render('friends', {friends: friendsArray});
});

app.listen(3000, process.env.IP, () => console.log('Server is running'));