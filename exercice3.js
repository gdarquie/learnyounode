'use strict'

const fs = require('fs');

// to test on local
// const buffer = fs.readFileSync('file_ex3.js');

const buffer = fs.readFileSync(process.argv[2]);
const string = buffer.toString();
const result = string.split('\n').length-1;

console.log(result);