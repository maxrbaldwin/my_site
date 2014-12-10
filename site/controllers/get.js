var mysql = require('mysql'),
    connection = require('../modules/connect.js');

exports.getPosts = function() {
    connection.connect();
};