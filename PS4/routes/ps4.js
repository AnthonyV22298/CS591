const express = require('express');
const router = express.Router();
const request = require("request");

const wxConfig = require('../configs/wxConfig');
const wxKey = wxConfig.exConfig.MYAPIKEY;

router.get('/', function (req, res, next) {  //  /apis/fx

        const options = {
            method: 'GET',
            url: 'https://samples.openweathermap.org/data/2.5/weather?q=London',
            qs:
                { key: wxKey},
            headers:
                { 'cache-control': 'no-cache',
                    Connection: 'keep-alive',
                    'accept-encoding': 'gzip, deflate',
                    Host: 'samples.openweathermap.org',
                    'Postman-Token': '69ecb4d5-7b42-4cd3-b8cf-9e4215cbb743',
                    'Cache-Control': 'no-cache',
                    Accept: '*/*',
                    'User-Agent': 'PostmanRuntime/7.13.0',
                    'Content-Type': 'application/x-www-form-urlencoded' } };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            res.render('test',JSON.parse(body));
        });



    }

)



router.post('/test', function (req,res,next) {  //   //apis/fx/foo

});
module.exports = router;