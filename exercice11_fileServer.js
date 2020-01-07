'use strict'

const fs = require('fs')
const http = require('http')

const port = process.argv[2]
const filename = process.argv[3]

const server = http.createServer((request, response) => {
	fs.createReadStream(filename).pipe(response)
})

server.listen(port)
