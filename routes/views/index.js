var keystone = require('keystone'),
    mongo = require('mongodb');

var MongoClient = mongo.MongoClient;

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res),
        locals = res.locals;
    // index_page_data = get_index_page();

    get_index_page(function(index_page) {
        // locals.section is used to set the currently selected
        // item in the header navigation.
        locals.section = 'home';
        // Render the view

        view.render('index', {data: index_page});
    });

};

function get_index_page(callback) {
    var index_page_data

    MongoClient.connect('mongodb://104.236.68.41:27017/test', function(err, db) {
        if (err) {
            console.log(err, ' Here is the error');
        } else {
            var collection = db.collection('index_page'),
                cursor = collection.find({
                    '_id': 1
                });

            cursor.toArray(function(err, docs) {
                callback(docs[0]);
            });
        }
    });
}
