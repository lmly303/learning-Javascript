// stack and heap memory

// stack => primitive datatype

let name = "shrey"
let name2 = name
name2 = "ram"

console.log(name) // shrey
console.log(name2) // ram

// isme name2 ko copy mili hai name ki toh jab name2 ki value change kari toh name mai koi chnage nhi aaya hai



// heap => non primitive

let student1 = {
    name:"shrey",
    marks:40
}

let student2 = student1

student2.marks = 80

console.log(student1.marks) // 80
console.log(student2.marks) // 80

// yha student2 k marks change karne pr 1 ka bhi ho gya kyuki student2 ko student1 ka original refernce mila tha 
// toh dono heap mai 1 location/memory ko point kar rahe the
