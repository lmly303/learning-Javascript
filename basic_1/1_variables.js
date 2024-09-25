const accountId = 144553
let accountEmail = "shrey@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 123  // not allowed to chnage the value of constant variable
accountEmail = "shr@gmail.com"
accountPassword = "6789"
accountCity = "Mumbai"

console.log(accountId)

/*
Prefer not to use var beacuse of issue in block scope and functional scope
*/



console.table([accountEmail,accountPassword,accountCity,accountState])