const express = require('express');
const router = express.Router();
const playerdb = require('../mongo/playerMongo');
const weatherdb = require('../mongo/weatherMongo');

playerdb.connect((err, client) => {
  if (err) {
    console.log(`ERR: ${err}`);
  } else {
    console.log(`Connected`);
  }
});

weatherdb.connect((err, client) => {
  if (err) {
    console.log(`ERR: ${err}`);
  } else {
    console.log(`Connected`);
  }
});

//Insert a new player

router.post('/', function (req, res, next) {

  let playerName = req.body.name;


  let playerObj = {
    name: playerName,
    team: playerTeam,
    city: playerCity
  };

  let mongo = playerdb.getPlayerDB();

  mongo.collection('players').insertOne(req.body, function (err, r) {
    res.send('success');
  });
});

router.get('/:name', function (req, res, next)  {

  let mongo = playerdb.getPlayerDB();
  mongo.collection('players').find({name: req.params.name}).
  toArray(function(err, docs) {
    console.log(docs);
    res.send(docs);
  })
});

router.get('/:team', function (req, res, next)  {

  let mongo = playerdb.getPlayerDB();
  mongo.collection('players').find({team: req.params.team}).
  toArray(function(err, docs) {
    console.log(docs);
    res.send(docs);
  })
});


//Searches player by city and check the weather that player will
//be playing in


router.get('/:city', function (req, res, next)  {

  let mongo = playerdb.getPlayerDB();
  mongo.collection('players').find({city: req.params.city}).
  toArray(function(err, docs) {
    console.log(docs);
    res.send(docs);
  })

  let mongo2 = weatherdb.getWeatherDB();
  mongo2.collection('weather').find({city: req.params.city}).
  toArray(function(err, docs) {
    console.log(docs);
    res.send(docs);
  })
});





module.exports = router;
