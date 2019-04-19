const request = require('request');
// request('http://www.google.com', (error, response, body) => {
//     console.log('error', error);
//     console.log('statusCode:', response && response.statusCode);
//     console.log('body: ', body);
// });

request('http://www.google.com', (error, response, body) => {
  error ? console.log('Error:', error) : console.log('body:', body);
});