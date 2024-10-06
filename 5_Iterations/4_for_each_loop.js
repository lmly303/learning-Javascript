const coding = ["js", "ruby", "java", "python", "cpp"]

// in forEach loop we pass a callback function

coding.forEach( function (val){
    console.log(val);
} )

coding.forEach( (item) => {
    console.log(item);
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
// dont call the function only pass its reference

// js
// ruby
// java
// python
// cpp

// above is the 4 different ways to write for each loop


coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
    // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
} )

// we can also access the index and the array with the for each loop





const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    // javascript
    // java
    // python
} )