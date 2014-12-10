var express = require('express'),
    get = require('./controllers/get.js'),
    post = require('./controllers/post.js'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.route('/posts')
    .get(function(req, res) {
        console.log('ran');
        connect.connect();
    });


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('server running on host ' + host + ' and port ' + port);
});
