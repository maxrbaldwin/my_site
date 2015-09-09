var keystone = require('keystone');

exports = module.exports = function(req, res) {
		keystone.list('Post').model.findOne({
			state: 'published',
			slug: req.params.post
		})
		.populate('author')
		.populate('categories')
		.exec(function(err, result) {
			res.render('post', { post: result });
		});
};
