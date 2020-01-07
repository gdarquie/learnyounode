'use strict'

const fs = require('fs');
const path = require('path');

const pathName = process.argv[2];
const type = '.' + process.argv[3];

fs.readdir(pathName, function (err, list){
	if (err) {
		console.log(err);
	}

	for (let i = 0; i < list.length ;i++) {
		if (path.extname(list[i]) == type) {
			console.log(list[i])
		}
	}
});