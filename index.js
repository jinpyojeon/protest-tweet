var express = require('express');
var app = express();
var path = require('path');

var twitter_analysis = require('./js/twitter_analysis.js');

app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', function(req,res) {
	// res.sendFile(path.join(__dirname + '/index.html'));
	res.render('index.html', { sentiment_data : sentiment_data });
});

app.listen(8080); 
