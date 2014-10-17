var express = require('express'),
    request = require('request')

var app = express();
var router = express.Router();

app.route('/test')
    .get(function(req, res){
        res.send('this is working');
    });

var server = app.listen(8080, function() {
    console.log(server.address().port + ' is where the magic happens');
});

module.exports = app;