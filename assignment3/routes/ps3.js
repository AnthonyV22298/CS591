const express = require('express');
const router = express.Router();

//ps3 question b 
router.get('/', function(req, res, next) {
    res.render('ps3', { str: 'Hey now' });
});

//ps3 question c

router.get('/test/:id', function(req, res, next){
    res.render('test', {str2: req.params.id});
});

router.post('/test/submit', function(req, res){
    const id = req.body.id;
    res.redirect('/test/' + id);
});

module.exports = router;