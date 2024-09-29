let d = new Date();
console.log(d.toString()) // Wed Sep 25 2024 10:45:49 GMT+0530 (India Standard Time)
console.log(d.toDateString()) // Wed Sep 25 2024
console.log(d.toISOString()) // 2024-09-25T05:19:08.072Z
console.log(d.toJSON()) // 2024-09-25T05:19:08.072Z
console.log(d.toLocaleDateString()) // 9/25/2024
console.log(d.toLocaleString()) // 9/25/2024, 10:49:08 AM

let dt = new Date(2024,9,19) // iss format mai month 0 se start hote hai
console.log(dt.toDateString()) // Sat Oct 19 2024

let dt2 = new Date("2003=10-19") // iss format mai month 1 se start hota hai
console.log(dt2.toDateString()) // Sun Oct 19 2003
console.log(dt2.getTime()) // 1066501800000

console.log(Date.now()) // 1727242808645

let dt3 = new Date();
console.log(dt3.getDate()) 
console.log(dt3.getMonth()+1) // +1 kia kyuki 0 se month deta hai yeh 

// get function pure date and time mai se specific item deta hai hame