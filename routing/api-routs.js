// requier friends.js
// module.exports


// app.get

var friendsData = require('../data/friends.js');

module.exports = function (app){

	app.get('/api/friends', function (req, res) {
		res.json(friendsData);
	});
}

// this will post

app.post('/api/friends', function (req, res){

	if (friendsData.length < 5) {
			friendsData.push(req.body);
			res.json(true); 
		} else { 
			waitListData.push(req.body);
			res.json(false); 
			console.log(friendsData);
		}
	});
}