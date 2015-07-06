var express = require('express');
var path = require('path');
var http = require('http');

var app = express();
//var mode = (process.env.NODE_ENV === 'production') ? 'production': 'development';
var mode = process.env.NODE_ENV || 'development';
var port = 3000;

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));
var server = http.createServer(app);
server.listen(port, function () {
    var bundle = require('./webpack/build.js');
    if (mode !== 'production'){
         port = 3001;
    }
    console.log('Server running on '+mode+' on port ' + port);
    bundle(mode);
});
