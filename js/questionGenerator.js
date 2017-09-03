const fs = require('fs');

let mainData = [];

function generateQuestion(numberOfFile){
	var fileNumber = Math.floor(Math.random() * numberOfFile) + 1;
	return fs.readFileSync(`question${fileNumber}.txt`,'utf-8');
}

module.exports = {
	generateQuestion : generateQuestion
};

// function getQuestion(filenumber, numberOfFile){
// 	var filename = `question${filenumber}.txt`;
// 	var result;
// 	fs.readFile(filename, 'utf-8', (err, data) => {
// 		addData(data);
// 	});

// 	function addData(data){
// 		mainData.push(data);
// 		if (filenumber < numberOfFile){
// 			result = getQuestion(filenumber + 1, numberOfFile);
// 		} else {
// 			x = Math.floor(Math.random() * 2);
// 			console.log(mainData[x]);
// 			result = mainData[x];
// 		}
// 	};
// 	return result;
// }

// console.log(getQuestion(1, 2));
