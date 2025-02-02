//const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123456"
tinderUser.name= "shubhankar"
tinderUser.is_Active= false
// console.log(tinderUser);

const user = {
    email: "abc@gmail.com",
    fullname: {
        userfullname:{
            firstname: "shubhankar",
            lastname: "das"
        }

    }
}

// console.log(user.fullname?.userfullname.firstname);
console.log(user.fullname?.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}
// console.log(obj3);


//const obj3 = Object.assign({},obj1,obj2) //{target} ....source.... because it ensure the guaranteed value  when you have too many objects to marged 

const obj3 = {...obj1,...obj2}
console.log(obj3);



const user2 = [
    {
        id:1123,
        email:"abc@gmail.com"
    },
    {
        id:1123222222,
        email:"aaaabc@gmail.com"
    },
    {
        id:1123333333333,
        email:"abcccccc@gmail.com"
    },
]

user2[1].email
// console.log(user2[1].email);


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('is_Active'));



const course = {
    name: "Js",
    price: "499",
}

// course.name

// const {price} = course
// console.log(price);
const {price:p} = course
console.log(p);

// const navber  = ({cname}) =>{ //destructure

// }
// navber(cname = "abc")  //in react




//json
// {
//     "name":"shubhankar",
//     "cname":"Js",   //api as a object
//    "price":"199"
// }

// [
//     {},
//     {},       //api as a array,objects
//     {}
// ]


