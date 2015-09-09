var index = require('./views/index');
var category  = require('./views/category');
var post = require('./views/post');
var about = require('./views/about');

// Setup Route Bindings
exports = module.exports = function(app) {

	// Views
	app.get('/', index);
	app.get('/c/:category', category);
	app.get('/p/:post', post);
	app.get('/about', about);

};
