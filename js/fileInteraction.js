const fs = require('fs');

let mainData = [];

var numberOfFile = fs.readFileSync(__dirname + '/numberOfFileStorage.txt','utf-8');

function pushQuestion(initiatedQuestion){
	numberOfFile++;

	fs.writeFileSync(__dirname + `/question${numberOfFile}.txt`, initiatedQuestion);
	fs.writeFileSync(__dirname + `/yes${numberOfFile}.txt`, 0);
	fs.writeFileSync(__dirname + `/no${numberOfFile}.txt`, 0);
	fs.writeFileSync(__dirname + '/numberOfFileStorage.txt', numberOfFile);
}

function generateQuestion(){

	var fileNumber = Math.floor(Math.random() * numberOfFile) + 1;
	var result = { 
		question : fs.readFileSync(__dirname + `/question${fileNumber}.txt`,'utf-8'),
		questionNumber : fileNumber
	}
	return result;
}

function increaseVote(side, questionNumber){
	var voteNumber = fs.readFileSync(__dirname + `/${side}${questionNumber}.txt`,'utf-8');
	voteNumber++;
	fs.writeFileSync(__dirname + `/${side}${questionNumber}.txt`, voteNumber)
}

function getQuestionStatistic(questionNumber){
	var result = {
		question : fs.readFileSync(__dirname + `/question${questionNumber}.txt`,'utf-8'),
		yesNumber : fs.readFileSync(__dirname + `/yes${questionNumber}.txt`,'utf-8'),
		noNumber : fs.readFileSync(__dirname + `/no${questionNumber}.txt`,'utf-8')
	}
	return result;
}

module.exports = {
	 pushQuestion : pushQuestion,
	 generateQuestion : generateQuestion,
	 increaseVote : increaseVote,
	 getQuestionStatistic : getQuestionStatistic
};