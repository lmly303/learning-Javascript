let score = null


console.log(typeof score)
let variableType = Number(score)
console.log(typeof variableType)
console.log(variableType)


/* 
from anything to number conversion

1. number to number
33 => 33

2. number string to number
"33" => 33

3. string with alphabets to number
"33abc" or "abc" => NaN (not a number)

4. boolen to number 
true => 1
false => 0

*/


let isLoggedIn = null;

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)


/*
from anything to Boolean conversion

1. number to boolean 
0 => false
any other number positive or negative => true

2. string to boolean
"" empty string => false
else => true

3. null to boolean
let isLoggedIn = null;
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn) => false

3. undefined to boolean
let isLoggedIn = undefined or let isLoggedIn
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn) => false

*/


let marks ;

let stringMarks = String(marks)
console.log(typeof stringMarks)
console.log(stringMarks)


/*
anything to String conversion

1.number to string
33 => "33"

2. boolean to string
true = "true"

3. null to string
null = "null"

4. undefined to string 
undefined = "undefiend"

*/


