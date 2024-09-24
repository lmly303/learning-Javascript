const score = 400
// console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
// string mai conver kar deta hai number and fir ham string ka koi bhi function use kar sakte hai


console.log(balance.toFixed(2));
// decimal k baad kitne digit tak ki value chaiye vo specify karta hai

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(5));
// total kitne digit honge yeh specify karta hai with and without decimal

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
// india k hisaab se comma lga deta hai number mai





// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
// positive value deta hai

console.log(Math.round(5.76));
// round off kar deta hai (.) ka baad sab kuch

console.log(Math.ceil(4.2));
// next number deta hai

console.log(Math.floor(4.9));
// previous number deta hai

console.log(Math.min(4, 3, 6, 8));
// minimum number deta hai

console.log(Math.max(4, 3, 6, 8));
// maximum number deta hai

console.log(Math.random());
// yeh random value deta hai 0 and 1 k beech mai

console.log((Math.random()*10) + 1);
// 10 se multiply karne se 0 se 10 k beech mai value dega and +1 karne se 0 nhi aayega answer mai


console.log(Math.floor(Math.random()*10) + 1);
// floor use karne se (.) k baad wala sab hat jayega

const min = 10
const max = 30

console.log(Math.floor(Math.random() * (max-min + 1)) + min)
// gives a number between the given range
