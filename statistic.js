const express = require('express');
const fs = require('fs');

const Router = express.Router();

const fileInteraction = require('./js/fileInteraction');

Router.get('/', (req, res) => {
	var questionNumber = fs.readFileSync(__dirname + '/currentFileNumber.txt','utf-8');
	var questionStatistic = fileInteraction.getQuestionStatistic(questionNumber);

	res.render('statistic', {
			question : questionStatistic.question,
			yesNumber : questionStatistic.yesNumber,
			noNumber : questionStatistic.noNumber
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