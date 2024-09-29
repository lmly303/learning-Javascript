const user = {
    username: "Shrey",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this); 
    }

}
// this refers to the object that the method is attached to
// When a regular function is invoked as a method of an object (obj.method()), this points to that object. 


user.welcomeMessage()
/* 
Shrey , welcome to website
{
  username: 'Shrey',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
} 
*/

user.username = "sam"
user.welcomeMessage()
/*
sam , welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/


console.log(this); // {}
// When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object (in non-strict mode) or undefined (in strict mode).

function chai(){
    let username = "Shrey"
    console.log(this.username); // undefined
}

chai()

function chai(){
    let username = "Shrey"
    console.log(this); 
}

chai()

const chai3 =  () => {
    let username = "Shrey"
    console.log(this.username); // undefined
}
chai3()

const chai2 =  () => {
    let username = "Shrey"
    console.log(this); // {}
}
chai2()



const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4)) // 7

const addTwo1 = (num1, num2) =>  num1 + num2
console.log(addTwo1(3, 5)) //8
// if we write arrow function like this we dont have to explicitely have to write return it will automatically return

const addTwo2 = (num1, num2) => ( num1 + num2 )
console.log(addTwo2(3, 6)) // 9
// we can also write the statement to be return inside the ()

const addTwo3 = (num1, num2) => ({username: "hitesh"})
console.log(addTwo3()) // { username: 'hitesh' }
// if we want to return an object then we have to write it like above , 
// if we write it without { } like this (username: "hitesh") then it will give us an error


const one = () => {
    const username = "Shrey"

    const two = () => {
        const website = "youtube"
        console.log(this); // {} in node and global object in browser
    }
    two()

}

one();



function one() {
    const username = "Shrey"

    const two = () => {
        const website = "youtube"
        console.log(this); // global object or window object in both node and browser
    }
    two()

}

one();


