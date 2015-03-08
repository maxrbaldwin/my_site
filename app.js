// Node modules
var express = require('express'),
    app = express();

// Controllers
var posts = require('./controllers/post.js');

// Routes
var index = require('./routes/index');

// App configs
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('../public'));

app.get('/', index.index);

app.get('/post/:id', posts.get_post);

// Here is a test to git hub hook

app.listen(5000);
