const express = require('express');
const app = express();

// '/' => hi there

app.get('/', (req, res) => res.send('Hi, there!'));

// '/bye' => Goodbye!
app.get('/bye', (req, res) =>res.send('Goodbye!'));

// '/dog' => meow
app.get('/dog', (req, res) => res.send('Meow!'));

//route parameters
app.get('/r/:subredditName/', (req, res) => {
    let subReddit = req.params.subredditName;
    res.send(`Welcom to the ${subReddit.toUpperCase()} Sub-Reddit`);
});

//catch all--returns this if there is no matching route. ie /cat returns this. should come last
app.get('*', (req, res) => res.send('YOU ARE A STAR!'));

// tell express to listen for requests(start server);
app.listen(3000, process.env.IP, () => console.log('Server has started'));