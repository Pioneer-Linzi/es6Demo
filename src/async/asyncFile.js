const util = require('util');
const fs = require('fs');
const readAsync = util.promisify(fs.readFile);


async function init (){
	let data = await readAsync('./asyncGen.js');
	console.log('data'+data);
}


init();
