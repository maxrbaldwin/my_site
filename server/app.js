var express = require('express'),
    sql = require('mysql'),
    connect = require('./modules/connect.js'),
    app = express();

app.route('/posts')
    .get(function(req, res) {
        console.log('ran');
        connect.connect();
    });


var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('server running on host ' + host + ' and port ' + port);
});
