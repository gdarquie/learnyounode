'use strict'

const myModule = require('./exercice6_module');

const dir = process.argv[2];
const type = process.argv[3];

function callback(err, list){
	if (err) {
		return console.error(err);
	}

	for (let i = 0; i < list.length; i++) {
		console.log(list[i]);
	}
}

myModule(dir, type, callback);