// friend data

var friends = [{
	"routeName": 'Betty',
	"name": 'Betty',
	"picture":'https:www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj_voXZr4bQAhUCQiYKHRdfAKcQjRwIBw&url=https%3A%2F%2Ftwitter.com%2Fbettyfckinwhite&psig=AFQjCNHNfsMEoP_pjjLd6d-lly9vxoVXWw&ust=1478048981356302',
	"scores":[
	1,
	3,
	4,
	3,
	4,
	3,
	2,
	1,
	1,
	2
	]
},{
	"routeName": 'Sophia',
	"name": 'Sophia',
	"picture":'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjVw_izsobQAhWFJCYKHeroA3MQjRwIBw&url=http%3A%2F%2Fquotesgram.com%2Fgolden-girls-sophia-quotes%2F&psig=AFQjCNEI6KwAOcnBFA-UX5a2pW4u1gJu6w&ust=1478049702065677',
	"scores":[
	3,
	3,
	4,
	4,
	4,
	1,
	1,
	1,
	2,
	3
	]
},{
	"routeName": 'Blanche',
	"name": 'Blanche',
	"picture":'https:www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj6r6qos4bQAhUGRyYKHanhCWwQjRwIBw&url=http%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fentertainment%2Fg2758%2Fgolden-girls-cast-young%2F&psig=AFQjCNGyjUjlElolrumpxuqHanO-5FFyIA&ust=1478049908428883',
	"scores":[
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	3,
	3,
	3
	]
},{
	"routeName":'Dorothy',
	"name":'Dorothy',
	"picture":"https:www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiav7uztIbQAhWBVSYKHU82BvUQjRwIBw&url=http%3A%2F%2Fwww.the90swereawesome.com%2Fthe-golden-girls-facts%2F&psig=AFQjCNHjuzcoxNlv038AOMagnrakfulg4A&ust=1478050201387421",
	"scores":[
	5,
	5,
	5,
	5,
	5,
	4,
	4,
	4,
	4,
	4
	]
}];

var userResults = [];
for(var i = 0; i < friends.length; i++){
	userResults.push(friends[i].scores);
}

var currentUsersScores = [5, 5, 5, 5, 5, 3, 4, 4, 5, 4];

mostCompatible();

function mostCompatible(){
	var mostCompatibleSoFar = -1;
	var totalDifference = 0;
	var mostCompatibleTotalDifference = -1;
	//Go through all of the users
	for(var y = 0; y < userResults.length; y++){
		//Compare each score for all of the users with the current user
		for(var i = 0; i < userResults.length; i++){
			if(currentUsersScores[i] != userResults[y][i]){
				totalDifference += Math.abs(currentUsersScores[i] - userResults[y][i]);
			}		
		}
		console.log("User: " + friends[y].name + " compatibality score " + totalDifference);
		// See if the current difference is less than the previous ones
		// We only need to keep track of the user most compatible with the current one

		if( (mostCompatibleTotalDifference < 0) || ( (mostCompatibleTotalDifference >= 0) && (mostCompatibleTotalDifference > totalDifference) ) ){
			mostCompatibleTotalDifference = totalDifference;
			mostCompatibleSoFar = y;
		}
		// reset the totalDifference for the next user comparison
		totalDifference = 0;
	}	

	console.log("Most compatible is: " + friends[mostCompatibleSoFar].name);
}
/*
//For testing - printing out the userResults array
for(var x = 0; x < userResults.length; x++){
	console.log(userResults[x]);
}
*/
$('#submit').on('click', function(){
	var newFriend = {
		"routeName": "newFriend",
		"name": $("#name").val().trim(),
		"picture":$('#photo').val().trim(),
		"scores":[]
	}
})