'use strict'

const http = require('http');
const bl = require('bl');

const url = process.argv[2];

function callback(response) {
	response.pipe(bl(function(err, data) {
		if (err) {
			console.error(err);
		}
		console.log(data.length)
		console.log(data.toString());
	}))
}

http.get(url, callback).on('error', console.error);
