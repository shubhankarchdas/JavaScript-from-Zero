// singleton  //object.create


//object literals

const mySymbol = Symbol("key1")

const jsuser = {
    name: "shubhankar",
    "last name": "das",
    [mySymbol]:"mykey1" ,
    age: 20,
    email: "shubhankar@gmail.com",
    is_active: false,
    lastlogin: ["Monday","Tuesday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
// console.log(jsuser.last name); //can't accres with . operator in this situation
console.log(jsuser[mySymbol]);


jsuser.email = "shubh@gmail.com"
// Object.freeze(jsuser)
jsuser.email = "abc@gmail.com"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hellow universe");
}
console.log(jsuser.greeting);
console.log(jsuser.greeting());

jsuser.greetingtwo = function(){
    console.log(`age is,${this.age}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());




