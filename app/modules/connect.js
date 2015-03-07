var sql = require('mysql');

exports.connect = function() {
    var connection = sql.createConnection({
        host: 'localhost',
        user: 'maxrbald',
        password: '#909121mx9332',
        database: 'maxrbald_ghost'
    });
    connection.connect(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('success');
        }
    });
};
