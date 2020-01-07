'use strict'

const http = require('http')
const map = require('through2-map')
const bl = require('bl')

const port = process.argv[2];

const server = http.createServer((req, res) => {
	if (req.method === 'POST') {
			// res.writeHead(200, {'Content-Type': 'text/plain'})

			// req.setEncoding('utf8');

			// req.pipe(bl(function(err, data) {
			// 	if (err) {
			// 		console.error(err);
			// 	}
			// 	res.write(data.toString().toUpperCase())
			// 	res.end();
			// }))	

			req.pipe(map(function(chunk) {
				return chunk.toString().toUpperCase()
			})).pipe(res)	
	}
	else {
		return res.end('Send me a post request please!')	
	}
})

server.listen(port)
