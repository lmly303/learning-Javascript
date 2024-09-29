// Immediately Invoked Function Expressions (IIFE)
/*

Immediately Invoked Function Expressions (IIFE) are functions in JavaScript that are executed right after they are defined. 
These functions don’t need to be called explicitly and are often used to avoid polluting the global scope by creating a private scope for variables and code.
*/


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//()() in first () define the function and second () is used to call it
// ; is used to call 2 iife together it basically tells the end of first iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('shrey')

// if you want to pass an argument then pass it in the sencond ()