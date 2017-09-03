const express = require('express');
const fs = require('fs');

const Router = express.Router();

const fileInteraction = require('./js/fileInteraction');

Router.get('/', (req, res) => {
	var generatedQuestion = fileInteraction.generateQuestion();
	console.log(generatedQuestion);
	fs.writeFileSync(__dirname + '/currentFileNumber.txt', generatedQuestion.questionNumber);

	res.render('home', {
		questionRender : generatedQuestion.question
		});
})

Router.post('/', (req, res) => {
	var fileNumber = fs.readFileSync(__dirname + '/currentFileNumber.txt','utf-8');

	if (req.body.yes === '') {
		fileInteraction.increaseVote('yes', fileNumber);
	} else {
		fileInteraction.increaseVote('no', fileNumber);
	};
	res.redirect('/statistic');
})

module.exports = Router;
