const request = require('request');
request('https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&name=San%20Antonio&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg', (error, response,body) => {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            let dataArray = data.dailyForecasts.forecastLocation.forecast;
            // dataArray.forEach( day => {
            //     console.log(day);
            // });
            console.log(dataArray[0]);

        } else {
            console.log(error);
        }
    });