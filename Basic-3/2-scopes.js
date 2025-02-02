let a = 500
// var c = 600

if (true) {
    let a = 10
    const b = 20
    var c = 30     // c = 30
    console.log(a);
      
}          

console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "shubhankar"

    function two(){
        const course = "Js"
        console.log(username);
        
    }
    // console.log(course);// can't access
    two()
}

one()


if(true){
    const username = "shubhankar"
    if(username === "shubhankar"){
        const age = 20
        console.log(username + age);
        
    }
    // console.log(age);
    
}
// console.log(username);


//----------------------------------------------------


console.log(addOne(5));
function addOne(value){
    return value+1
}


// console.log(addTwo(10)); //error
const addTwo = function(value){   //sometime its called expression    variable is most powerfull in js because it can holds anything...
    return value+2
}
// console.log(addTwo(10));
