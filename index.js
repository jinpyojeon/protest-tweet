var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var socketIO = require('socket.io')(http); 

var server = http.createServer(app);

var twitter_analysis = require('./js/twitter_analysis.js');

app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res) {
	res.render('index.html');
});

server.listen(8080); 
