const express = require('express');

const Router = express.Router();

const fileInteraction = require('./js/fileInteraction');

Router.get('/', (req, res) => {
	res.render('contribute');
})

Router.post('/', (req, res) => {
	var newQuestion = req.body.question;
	fileInteraction.pushQuestion(newQuestion);
	res.redirect('/contribute');
})

module.exports = Router;
