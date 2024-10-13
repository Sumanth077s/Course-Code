'use strict';

function computerRectStats(length, width) {
    let areaRect = Number(length) * Number(width);
    let perimeterRect = 2 * (Number(length) + Number(width));
    console.log(`Area: ${areaRect}`);
    console.log(`Perimeter: ${perimeterRect}`);
}

let rectALength = 25;
let rectAWidth = 10;

computerRectStats(rectALength, rectAWidth);