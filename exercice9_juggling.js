'use strict'

const bl = require('bl');
const http = require('http');

let count = 0;
const outputArray = [];
const urls = [ 
	process.argv[2], 
	process.argv[3], 
	process.argv[4]
];

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(outputArray[i])
  }
}


for (let i = 0; i < urls.length; i++) {

	http.get(urls[i], function (response) {

		response.pipe(bl(function(err, data) {
			if (err) {
				console.error(err);
			}

			outputArray[i] = data.toString();
		    count++;

			if (count === 3) {
				printResults();
			}
		}))
	})
	.on('error', console.error);
}

