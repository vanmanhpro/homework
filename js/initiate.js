const fs = require('fs');

var numberOfFile = fs.readFileSync('numberOfFileStorage.txt','utf-8');

for( let i = 1; i <= numberOfFile; i++){
	var objectJSON = fs.readFileSync(`survey${i}.txt`,'utf-8');
	var object = JSON.parse(objectJSON);
	object.yesVote = 0;
	object.noVote = 0;

	var newObjectJSON = JSON.stringify(object);
	fs.writeFileSync(`survey${i}.txt`,newObjectJSON);
}

for( let i = 1; i <= 9; i++){
	var objectJSON = fs.readFileSync(`survey${i}.txt`,'utf-8');
	object = JSON.parse(objectJSON);
	console.log(object);
}