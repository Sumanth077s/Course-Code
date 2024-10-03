// index.js
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
// });

// server.listen(3000, () => {
//     console.log('Server running at http://127.0.0.1:3000/');
// });


'use strict';

var costOfMilkShake = 350;
var discount = 0.5;
var tax = 18;
var quantity = 3;

var total = (costOfMilkShake + tax - discount) * 1;
console.log('The Total payable amount is - ' + total);

var numOfEpisodes = 22;
var perSeason = 22/2;

console.log('Episode per season: ' + perSeason);

console.log(2 ** 6 + 'bits'); /* The result is 2 power 6 (2^6) */ 