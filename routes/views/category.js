var keystone = require('keystone');

exports = module.exports = function(req, res) {
		keystone.list('PostCategory').model.findOne({
			key: req.params.category
		})
		.exec(function(err, result) {
			keystone.list('Post').model.find({
				categories: { '$in': [result._id] }
			})
			.where('state', 'published')
			.populate('categories')
			.populate('author', 'name')
			.sort('-publishedAt')
			.limit(30)
			.exec(function(err, posts){
				res.render('index', { posts: posts });
			});
		});
};
