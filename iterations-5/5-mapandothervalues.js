const myNumber = [1,2,3,4,5,6]

// const newNum = myNumber.map((num) => {return num + 10})

// chaining
const newNum = myNumber
                    .map((num) => num * 10 )
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)
console.log(newNum);




// reduce()


const mynum = [1,2,3,4,5,6]

// const total = mynum.reduce(function (accumulator,currentvalue){
//     console.log(`acc: ${accumulator} and curr: ${currentvalue}`);
    
//     return accumulator + currentvalue
// }, 0)


const total = mynum.reduce((acc, curr) => acc + curr,  0)
console.log(total);



const shoppingCart = [
    {
        itemName: "lenevo",
        price: 50000
    },
    {
        itemName: "samsung",
        price: 80000
    },
    {
        itemName: "asus",
        price: 40000
    },
    {
        itemName: "mac",
        price: 90000
    },
]


const price = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(price);
