// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); // array k index k througn ham elements ko access karte hai

// Array methods

myArr.push(6) // insert the element in the back
myArr.push(7)
myArr.pop() // remove last element in the array


myArr.unshift(9) // insert in the front of the array
myArr.shift() // remove from the front


console.log(myArr.includes(9)); // boolean value return karta hai
console.log(myArr.indexOf(3)); // index return karta hai

let arr2 = ["shrey", 19,10]
const newArr = arr2.join() // string retun karta hai array k saare elements ki

console.log(arr2) // [ 'shrey', 19, 10 ]
console.log( newArr) // shrey,19,10


// slice, splice

console.log("A ", myArr) // A  [ 0, 1, 2, 3, 4, 5, 6 ]

const myn1 = myArr.slice(1, 3) 
// isme new array return hoti h and last index include nhi hota hai
// original array mai koi change nhi aata hai

console.log(myn1) // [ 1, 2 ]
console.log("B ", myArr) // B  [ 0, 1, 2, 3, 4, 5, 6 ]


const myn2 = myArr.splice(1, 3)
// isme bhi new array return hoti hai and last index bhi include hota hai
// original array mai se splice wale element remove ho jaate hai

console.log("C ", myArr) // C  [ 0, 4, 5, 6 ]
console.log(myn2) // [ 1, 2, 3 ]