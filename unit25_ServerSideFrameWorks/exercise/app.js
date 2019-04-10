const express = require('express');
const app = express();


app.get('/', (req, res) => res.send('Hi there, welcome to my assignment'));

app.get('/speak/:animal', (req, res) => {
    let animal = req.params.animal.toLowerCase();
    let sounds = {
        dog: 'Woof Woof',
        pig: 'Oink',
        cow: 'Mooo',
        cat: 'I hate you humon',
        goldfish: '...'
    }
    let sound = sounds[animal];


    res.send(`The ${animal} says '${sound}'`);
})

app.get('/repeat/:word/:int', (req, res) => {
    let word = req.params.word;
    let num = Number(req.params.int);
    let repeatable = `${word} `;
    res.send(repeatable.repeat(num));
});


let starRoute = app.get('*', (req, res) => res.send('Sorry, page not found...What are you doing with your life?'));
starRoute;
app.listen(3000, process.env.IP, () => console.log('Server is running'));