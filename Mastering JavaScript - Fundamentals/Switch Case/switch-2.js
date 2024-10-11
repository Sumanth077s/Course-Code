'use strict';

// let item = 'Kiwi';
let item = 'Potato';
let type;

switch (item) {
    case 'Apple':
    case 'Banana':
    case 'Kiwi':
    case 'Strawberry':
        type = 'fruit';
        break;
    case 'lettuce':
    case 'Potato':
    case 'Celery':
    case 'Eggplant':
        type = 'Vegetable';
        break;
    default: {
        throw new Error('Unable to identify item ... ');
    }
}

console.log(`${item} is a type of ${type}`);