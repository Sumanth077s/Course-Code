// Ternary Operator: A shorthand way to write an if-else statement.

'use strict';

let temperature = 35;

// condition ? value_if_true : value_if_false;
let feelTemp = temperature >= 25 ? 'warm' : 'cool';

console.log(`Today is a ${feelTemp} day`);


let cost = 2100;

let discount = cost < 1000 ? 0 : 10;

let totalCost = cost - cost * (discount / 100);

console.log(`Original CostL $${cost}`);
console.log(`Original CostL $${totalCost}`);