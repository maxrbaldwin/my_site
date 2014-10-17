var express = require('express'),
    request = require('request'),
    forever = require('forever')


var options = {
    max: 3
};

forever.start('api.js', options);
