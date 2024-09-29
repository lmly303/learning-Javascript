let name = "shrey"
let age = 21

console.log(`my name is ${name} and i am ${age} years old`) // readability badhata hai yeh

console.log(name[2]) // r
console.log(name.__proto__) // {}
console.log(name.length) // 5
console.log(name.toUpperCase()) // SHREY
console.log(name.bold()) // <b>shrey</b>

let fullName = "shrey kariria"
let firstName = fullName.substring(0,5)
let lastName = fullName.substring(6)

console.log(firstName) // shrey
console.log(lastName) // kariria

// substring mai negative value nhi de sakte h agar denge toh ignore krr dega

let student = "shubham"

let newStudent = student.slice(-6,6)
console.log(newStudent) // hubha

// slice mai negative value bhi de sake hai 


let s1 = "    ram is   "
console.log(s1)
console.log(s1.trim())

// trim start and end mai se white space remove kar deta hai


let url = "https://shrey%20kariria"
console.log(url.replace("%20", "-")) // https://shrey-kariria


let sentence = "my name is shrey"
let breakSentence = sentence.split(" ")
console.log(breakSentence) // [ 'my', 'name', 'is', 'shrey' ]
