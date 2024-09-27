var c = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a);
    
}
// This will give us an error as we cant access the variables declared inside local scope outside the scope
// variable declared with var keyword can be accessed outside the local scope also


console.log(a); // 10
console.log(b); // 20
console.log(c); // 30 
// ander and bahar wala c same hi hai 
// let and const se agar a and b bahar (global scope mai) declare karte toh local scope wale a and b alag hote global scope wale a and b se




function one(){
    const username = "Shrey"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Shrey"
    if (username === "Shrey") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// upar commented console.log statement error dengi saari because parent scope child scope k variables access nhi kar sakta h but child scope parent k access kar sakta hai


// ++++++++++++++++++ interesting  example of hoisting++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}
 // yeh function declaration error nahi dega isme hoistion ho rahi hai




addTwo(5)
const addTwo = function(num){
    return num + 2
}

// aise function declaration error dega agar function declaration se pehle function call kia toh isme hoistiong nahi ho rahi hai

// will discuss hoistion in detail in further lectures.....