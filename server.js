const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('fs');

const homeRouter = require('./home');
const aboutRouter = require('./about')
const contributeRouter = require('./contribute');
const statisticRouter = require('./statistic');

const app = express();

app.use(bodyParser.urlencoded({ extended : true }));

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({defaultLayout: 'menu'}));

app.get('/menuStyle.css', (req, res) => {
  res.sendFile(__dirname + '/public/menuStyle.css');
});

app.use('/', homeRouter);
app.use('/contribute', contributeRouter);
app.use('/about', aboutRouter);
app.use('/statistic', statisticRouter);

app.listen(8888, () => {
	console.log("Your home work is online at 8888")
});
