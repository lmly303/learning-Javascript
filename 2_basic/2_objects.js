// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shrey",
    "full name": "Shrey Kariria",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "shrey@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// sumbol ko object k ander [] mai likhte hai..

console.log(JsUser.email) // isko use kar sakte hai but jab key value mai space hoga for example (email address) toh yeh nhi chalega
console.log(JsUser["email"]) // yeh best way hai fetch karne ka object values ko
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser) 
// we cant change the values of a freeze object

JsUser.email = "hitesh@microsoft.com" // this wont change the value as the object is freezed
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting) // [Function (anonymous)]
// this will return the function

console.log(JsUser.greeting()); // Hello JS user

console.log(JsUser.greetingTwo()); // Hello JS user, Shrey