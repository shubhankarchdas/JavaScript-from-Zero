// for of  

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "shubhankar ch das"
for (const greet of greetings) {
    console.log(greet);
}

// maps

const map = new Map()
map.set('js',"javascript")
map.set('py',"python")
map.set('ts',"typescript")
// map.set('js',"javascript")


console.log(map);

for (const [key, value] of map) {
    console.log(key,':-',value);   
}



//for in
const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const key in myObject) {
    // console.log(myObject[key]);
    console.log(`${key} : ${myObject[key]}`);
     
}


const program= ["js","python","c","c++"]

for (const key in program) {
    console.log(program[key]); 
}



//forEach

const array = ["js","python","c","c++"]

// array.forEach( function (item) {
//     console.log(item);
    
// })

array.forEach( (val) => {
    console.log(val);
    
})

// function printMe(item){
//     console.log(item);
    
// }
// array.forEach(printMe)

array.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
} )


const myarr = [
    {   name : "shubhankar",
        age: 20
    },
    {   name : "pranay",
        age: 24
    },
    {   name : "sujan",
        age: 26
    }
]

// myarr.forEach((item) => {
//     console.log(item.name);
    
// })




// const anotherarr = myarr.forEach((item) => {
//     // console.log(item.name);
//     return item  // forEach loop can't return anything
// })
// console.log(anotherarr);



//filter

const num = [1,2,3,4,5,6,7,8]

// const newnum = num.filter((num) => num > 5)
// const newnum = num.filter((num) => {
//     // num > 6
//     return num > 5
// })

num.forEach( function (item) {
    if (item>5) {
        console.log(item); 
    }     
    })

const newnum = []
num.forEach((num) => {
    if (num > 5) {
        newnum.push(num)
    }
})

console.log(newnum);
