const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // complete arraya ko end mai 1 single index mai as an array push kar dia

console.log(marvel_heros) // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]) // flash

const allHeros = marvel_heros.concat(dc_heros) 
// new array return karta hai 
// array k items ko push karta hai last mai

console.log(allHeros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros] // spread bhi concat ki trah hi hai but yha ham more than 1 arraya bhi pass kar sakte hai

console.log(all_new_heros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // isme ham depth ko single array k ander le aate hai 
console.log(real_another_array) // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]



console.log(Array.isArray("Shrey")) // false
console.log(Array.from("Shr ey  ")) // [ 'S', 'h', 'r', ' ', 'e', 'y', ' ', ' ' ]
// string k ander jo bhi hai usko array mai insert kr deta hai
console.log(Array.from({name: "Shrey"})) // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]