// Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App

var app = express();
var PORT = process.env.PORT||8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// Create New Characters - takes in JSON input
app.post('/api/new', function (req, res) {
	var friends = req.body;
	friends.routeName = friends.name.replace(/\s+/g, '').toLowerCase();

	console.log(newcharacter);

	characters.push(newcharacter);

	res.json(newcharacter);
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});