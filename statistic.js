const express = require('express');
const fs = require('fs');

const Router = express.Router();

const fileInteraction = require('./js/fileInteraction');

Router.get('/', (req, res) => {
	var questionNumber = fs.readFileSync(__dirname + '/currentFileNumber.txt','utf-8');
	var questionStatistic = fileInteraction.getQuestionStatisticObject(questionNumber);

	res.render('statistic', {
			question : questionStatistic.question,
			yesVote : questionStatistic.yesVote,
			noVote : questionStatistic.noVote
		});
})

Router.post('/', (req, res) => {

	if (req.body.home === '') {
		res.redirect('/');
	} else if (req.body.contribute === '') {
		res.redirect('/contribute');
	};
})

module.exports = Router;