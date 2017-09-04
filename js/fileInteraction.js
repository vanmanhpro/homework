const fs = require('fs');

let mainData = [];

var numberOfFile = fs.readFileSync(__dirname + '/numberOfFileStorage.txt','utf-8');

function pushQuestion(initiatedQuestion){
	numberOfFile++;
	var newObject = {
		questionNumber : numberOfFile,
		question : initiatedQuestion,
		yesVote : 0,
		noVote : 0
	}

	recordQuestionStatisticObject(numberOfFile, newObject);
	fs.writeFileSync(__dirname + '/numberOfFileStorage.txt', numberOfFile);
}

function generateQuestion(){
	var fileNumber = Math.floor(Math.random() * numberOfFile) + 1;
	return getQuestionStatisticObject(fileNumber);
}

function increaseVote(side, questionNumber){
	var questionStatisticObject = getQuestionStatisticObject(questionNumber);

	if (side === 'yes') {
		questionStatisticObject.yesVote++;
	} else {
		questionStatisticObject.noVote++;
	}

	recordQuestionStatisticObject(questionNumber, questionStatisticObject);
}

function recordQuestionStatisticObject(questionNumber, object){
	var objectJSON = JSON.stringify(object);
	fs.writeFileSync(__dirname + `/survey${questionNumber}.txt`, objectJSON);	
}

function getQuestionStatisticObject(questionNumber){
	var resultJSON = fs.readFileSync(__dirname + `/survey${questionNumber}.txt`,'utf-8');
	return JSON.parse(resultJSON);
}

module.exports = {
	 pushQuestion : pushQuestion,
	 generateQuestion : generateQuestion,
	 increaseVote : increaseVote,
	 getQuestionStatisticObject : getQuestionStatisticObject
};