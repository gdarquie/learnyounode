'use strict'

const fs = require('fs');
const file = process.argv[2]

fs.readFile(file, 'utf8', function callback(err, data) {
	console.log(data.split('\n').length-1);
});