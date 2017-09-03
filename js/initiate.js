const fs = require('fs');

for( let i = 1; i <= 9; i++){
	fs.writeFileSync(`yes${i}.txt`, 0);
	fs.writeFileSync(`no${i}.txt`, 0);
}