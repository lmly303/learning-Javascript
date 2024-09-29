
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName()

function addTwoNumbers(number1, number2){

    console.log(number1 + number2); 
    // yeh return nahi karega kuch bhi bss print krega toh kisi variable ko is function ko assign karege toh undefined aayega
}

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
    // return k baad koi bhi statement execute nahi hoti hai
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()) // yeh kuch bhi return nahi karega 
console.log(loginUserMessage("hitesh"))


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // [200,400,500.2000]


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // [500,200] starting wali 2 value starting wale variable ko assign ho jayegi i.e.(bal1,val2)

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user) 

handleObject({
    username: "sam",
    price: 399
})

// object can be passed as an argument in two ways 
// 1. name of the object is passed as an argument
// 2. complete object is passed in the argument

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// array can be passed as an argument in two ways 
// 1. name of the array is passed as an argument
// 2. complete array is passed in the argument
