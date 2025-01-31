// primitive datatype

// 7 types : String,Number,Boolean,null,undefiend,Symbol,BigInt

const score = 100
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id==anotherid);


// const bigNumber = 1234456676787833333n


// Reference datatype(non primitive): Array,Objects,Functions


const heros = ["sss","aaa","bbb"]; //array
let myObj = {
    name: "shubhankar",  //{object}
    age: 20,
}

const myFunction = function (){
    console.log("Hey! shubhankar");
    
}

console.log(typeof bigNumber);



// -----------------------------------------------
//Stack (primitive), Heap(non-premitive)

let myname = "shubhankar"
let anothername = myname
anothername = "shubh"
console.log(myname);
console.log(anothername);

let userOne = {
    email: "abc@gmail.com",
    upi: "abc@ybl"
}
let userTwo = userOne

userTwo.email = "xyz@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


