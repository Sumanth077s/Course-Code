'use strict';

let products = [
    {
        name: 'HyperV 4k Projector',
        cost: 2500,
        shipping: null, /* If it is not present it means NULL */
    },
    {
        name: 'Vision HDMI Cable',
        cost: 10,
        shipping: 0,
    },
];

console.log('The 1st product');

console.log(`Product: ${products[0].name || 'N/A'}`);
console.log(`Cost: ${products[0].cost || 'N/A'}`);
console.log(`Shipping: ${products[0].shipping || 2.5}`); /* if (shipping) is "Null" it will show 2.5 */

console.log('The 2nd product');

console.log(`Product: ${products[1].name || 'N/A'}`);
console.log(`Cost: ${products[1].cost || 'N/A'}`);
// console.log(`Shipping: ${products[1].shipping || 2.5}`);
console.log(`Shipping: ${products[1].shipping ?? 2.5}`);