const express = require('express');
const router = express.Router();
const request = require("request");

router.get('/', function (req, res, next) {  //  /apis/fx

        const options = {
            method: 'GET',
            url: 'http://erikberg.com/',
            qs:
                { key: '117334e4c4f7f3546f4bd21bb5b5bb35',
                  team: 'Mets'},
            headers:
                { 'cache-control': 'no-cache',
                    Connection: 'keep-alive',
                    'accept-encoding': 'gzip, deflate',
                    referer: 'http://erikberg.com',
                    'Postman-Token': '052a9dea-43f8-4ae3-9199-dd7ee18cba4b',
                    'Cache-Control': 'no-cache',
                    Accept: '*/*',
                    cookie: 'JSESSIONID=012EA2646E74C3AB9A6A8F554631143E',
                    'User-Agent': 'PostmanRuntime/7.13.0',
                    'Content-Type': 'application/x-www-form-urlencoded' } };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            //res.render('test',JSON.parse(body));
        });



    }

)



router.post('/test', function (req,res,next) {  //   //apis/fx/foo

});
module.exports = router;