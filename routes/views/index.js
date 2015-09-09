var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var Post = keystone.list('Post');

	Post.model.find()
		.where('state', 'published')
		.populate('categories')
		.populate('author', 'name')
		.sort('-publishedAt')
		.limit(30)
		.exec(function(err, posts) {
			res.render('index', { posts: posts });
		});
};
