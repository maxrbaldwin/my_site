// Node modules
var express = require('express'),
    app = express();

// Controllers
var get = require('./controllers/get.js'),
    post = require('./controllers/post.js');

// Routes
var index = require('./routes/index');

// App configs
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', index.index);

app.route('/posts')
    .get(function(req, res) {
        console.log('hit');
    });

var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('server running on host ' + host + ' and port ' + port);
});
