// setTimeout(function, delay, ...args);

// Example:

console.log("Start");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("End");


// setInterval(function, interval, ...args);

// Example:

let count = 0;

const intervalId = setInterval(() => {
  console.log("Running every 1 second", ++count);
  if (count === 5) {
    clearInterval(intervalId); // Stops after 5 runs
    console.log("Stopped");
  }
}, 1000);

