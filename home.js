const express = require('express');

const Router = express.Router();

const genQ = require('./js/questionGenerator');

Router.get('/', (req, res) => {
	var generatedQuestion = genQ.generateQuestion(2);
	res.render('home', {
		questionRender : generatedQuestion
		});
})

module.exports = Router;
