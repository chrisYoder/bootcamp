// const request = require('request');
// const locus = require('locus');
const rp = require('request-promise');

rp('https://jsonplaceholder.typicode.com/users/1')
    .then( htmlstring => {
        const data = JSON.parse(htmlstring);
        console.log(`${data.name} lives in ${data.address.city}`);
    })
    .catch(err => console.log('Error:', err));
