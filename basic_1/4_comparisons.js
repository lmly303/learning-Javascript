// don't compare 2 different datatypes it is not a good practive 

// In all the below examples it will first convert the datatype and then it will comapre and print the result
console.log(2 > "1")
console.log(2 >= "1")
console.log(2 <= "1")
console.log(2 == "1")
console.log(2 < "1")

// below is the good way for comparison, "===" it will check both first that the datatype is same or not and then the values
console.log(2 === "1") // false (different datatype)
console.log(2 === 2 ) // true bath value and datatype is same
