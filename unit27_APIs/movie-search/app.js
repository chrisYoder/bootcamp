const express = require('express');
const app = express();
const request = require('request');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('search');
});

app.get('/results', (req, res) => {
    let query = req.query.search;
    let url = 'http://www.omdbapi.com/?apikey=thewdb&s=' + query;
    request(url, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            let results = JSON.parse(body);
            res.render('results', {results: results});
        }else{
            res.send(error);
        }
    });
});

app.listen(process.env.PORT, process.env.IP, () => console.log('Movie App has started'));