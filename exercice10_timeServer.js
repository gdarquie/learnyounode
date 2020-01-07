'use strict'

const net = require('net')

function convertTime(int) {
  
  int = int.toString() 

  if (int < 10) {
    int = 0 + int
  }
  return int 
}

const server = net.createServer(function listener (socket) {
  let myDate = new Date()
  let year = convertTime(myDate.getFullYear())
  let month = convertTime(myDate.getMonth()+1)
  let day = convertTime(myDate.getDate())
  let hours = convertTime(myDate.getHours())
  let minutes = convertTime(myDate.getMinutes())

  socket.end(year + '-' + month + '-' + day + ' ' +hours + ':' + minutes +'\n')
})

server.listen(process.argv[2]);