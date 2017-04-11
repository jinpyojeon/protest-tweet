var Twitter = require('twitter');
var sentiment = require('sentiment-spanish');

var client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET, 
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

global.sentiment_data = []; 

var stream = client.stream('statuses/filter', {track: 'venezuela'});
stream.on('data', function(event) {
  var sentiment_score; 
  console.log(event && event.text);
  console.log(sentiment_score = sentiment(event.text).score);
  sentiment_data.push(sentiment_score);
});
 
stream.on('error', function(error) {
  throw error;
});

