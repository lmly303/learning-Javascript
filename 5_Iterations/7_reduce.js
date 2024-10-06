const myNums = [1, 2, 3]

const myTotal1 = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    // acc: 0 and currval: 1
    // acc: 1 and currval: 2
    // acc: 3 and currval: 3
    return acc + currval
}, 0)

/*
In reduce method we have two values accumulator and current value
initially we have to pass the value of accumulator
then in second pass the accumulator takes the value returned in first pass
see this in the example above
*/

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal); // 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); // 22996