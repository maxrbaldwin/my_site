var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

var port = process.env.PORT || 8080;

app.route('/test')
    .get(function(req, res){
        console.log('hit');
    });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);