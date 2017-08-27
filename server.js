"use strict";
var express = require('express');
var http = require('http');
var webpack = require('webpack');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var server = http.createServer(app);

var config = require('./webpack.config');
var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(__dirname + '/public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./route/User')(app);

app.use('*', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});


server.listen(5000, () => {
  console.log('listening on 5000');
});

module.exports = server;