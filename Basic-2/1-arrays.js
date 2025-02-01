const myArr = [0,1,2,3,4]

const mycar = ["BMW","Benz","R8","Bently"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);


//Array methods

// myArr.push(6)
// myArr.push(10)
// myArr.pop(10)

// myArr.unshift(5)
// myArr.shift(5)

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice, splice

console.log("a ",myArr);
const myn1 = myArr.slice(1, 3)
console.log("c ",myArr); //never manipulated the main array

console.log(myn1);


console.log("b ",myArr);
const myn2 = myArr.splice(1, 3)
console.log("d ",myArr); //manipulated the main array 
console.log(myn2);




