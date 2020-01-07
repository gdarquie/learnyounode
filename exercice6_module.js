'use strict'

const path = require('path');
const fs = require('fs');

module.exports = function (directory, type, callback) {
	
	fs.readdir(directory, function (err, list){
		
		if (err) {
			return callback(err, '')
		}

		var files = [];

		for (let i = 0; i < list.length ;i++) {
			if (path.extname(list[i]) === '.' + type) {
				files.push(list[i]);
			}
		}

		callback(null, files);
	});
}
