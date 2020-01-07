'use strict'

const http = require('http')
const url = require('url');

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' })

	const myUrl = url.parse(req.url)
	let completeUrl = new URL(myUrl.search, 'http://example.com')
	let myDateTime = completeUrl.searchParams.get('iso')
	let inputDateObject = (new Date(myDateTime))

	if (myUrl.pathname === '/api/parsetime') {
		let hour = 4
		let minute = 23
		let second = 15

		let myTimeObject = {
			hour: inputDateObject.getHours(),
			minute: inputDateObject.getMinutes(), 
			second: inputDateObject.getSeconds()
		}

		res.write(JSON.stringify(myTimeObject))
	}
	
	if (myUrl.pathname === '/api/unixtime') {

		var unixTimestamp = Math.round(new Date(myDateTime).getTime());
		console.log(unixTimestamp)
		let output = { "unixtime": unixTimestamp }
		output = JSON.stringify(output)
		res.write(output)
	}

	
	// console.log(myUrl)
	res.end()
})

server.listen(process.argv[2])