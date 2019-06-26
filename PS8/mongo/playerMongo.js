const mongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017';

let _db;

//First MongoDB holding the stats of players in the MLB
module.exports = {

    connect: function( callback ) {
        mongoClient.connect( mongoURL,  { useNewUrlParser: true }, function( err, client ) {
            _db  = client.db('players');
            return callback( err );
        } );
    },
    getPlayerDB: () => { return _db; }


}
