const express = require('express');
const router = express.Router();
const request = require("request");

//const wxConfig = require('../configs/wxConfig');
//const wxKey = wxConfig.exConfig.MYAPIKEY;

router.get('/', function (req, res, next) {  //  /apis/fx

        const options = {
            method: 'GET',
            url: 'https://samples.openweathermap.org/data/2.5/weather?q=London&APPID=15ca9b13a8896a91ff8d198da955c73c',
            qs:
                {q: 'London',
                    APPID: '15ca9b13a8896a91ff8d198da955c73c'
                 },
            headers:
                { 'cache-control': 'no-cache',
                    Connection: 'keep-alive',
                    'accept-encoding': 'text',
                    Host: 'samples.openweathermap.org',
                    'Postman-Token': 'cce47e0b-8e90-40dc-8932-65c78fb1d43e,803b1244-9e05-4118-a515-808342b85d4b',
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
