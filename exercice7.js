'use strict'

const client = require('http');

const url = process.argv[2];

function callback(response) {
	response.setEncoding('utf8')
	response.on('data', function (data) {
		console.log(data);
	})
	response.on('error', console.error)
}

client.get(url, callback).on('error', console.error);