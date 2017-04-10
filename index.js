var express = require('express');
var app = express();
var path = require('path');

var Twitter = require('twitter');
var sentiment = require('sentiment-spanish');

var client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET, 
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var stream = client.stream('statuses/filter', {track: 'venezuela'});
stream.on('data', function(event) {
  console.log(event && event.text);
  console.log(sentiment(event.text).score);
});
 
stream.on('error', function(error) {
  throw error;
});

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080); 
