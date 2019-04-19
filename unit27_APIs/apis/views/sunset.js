const request = require('request');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    request('https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_astronomy&name=San%20Antonio&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg', (error, response,body) => {
        if(!error && response.statusCode == 200) {
            let astroData = JSON.parse(body);
            res.render('main', {astroData: astroData});
        }else{
            res.send(error);
        }
    });


});


app.listen(process.env.PORT, process.env.IP, () => console.log('Server is up'));
    // request('https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_astronomy&name=San%20Antonio&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg', (error, response,body) => {
    //     if (!error && response.statusCode == 200) {
    //         let data = JSON.parse(body);
    //         let dataArray = data.astronomy.astronomy;
    //         dataArray.forEach( day => {
    //             console.log(day);
    //         });

    //     } else {
    //         console.log(error);
    //     }
    // });


// console.log(astronomyArray);



// request('https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&name=San%20Antonio&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg', (error, response, body) => {
//     if(!error && response.statusCode == 200) {
//         console.log(body);
//     }
// })

