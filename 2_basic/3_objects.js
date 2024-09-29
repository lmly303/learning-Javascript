// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // this how to access nested objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj6 = { obj1, obj2 } 
console.log(obj6) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// this will insert the two objects as a object

const obj3 = Object.assign({}, obj1, obj2, obj4)
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// this will insert the new object as a keys values

const obj7 = {...obj1, ...obj2}
console.log(obj7) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// this will also insert the new object as a keys values



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)
// this is how to fetch the object inside an array

console.log(tinderUser);

console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
// this will return all the keys inside an array 

console.log(Object.values(tinderUser)) // [ '123abc', 'Sammy', false ]
// this will return all the values inside an array 

console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// this will insert all the keys and values pair in an array inside an array

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true
// this will check weather the key is present inside the object or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shrey"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);
// we use this to avoid using the big syntax again and again



const {courseInstructor: instructor} = course
console.log(instructor);
// we can also name that kay something else

// {
//     "name": "shrey",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]