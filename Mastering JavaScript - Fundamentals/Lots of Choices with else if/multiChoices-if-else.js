'use strict';

let currentHour = new Date().getHours();

if(currentHour >= 0 && currentHour <= 12) {
    console.log('Good Morning!');
} else {
    console.log('Good Day!');
}