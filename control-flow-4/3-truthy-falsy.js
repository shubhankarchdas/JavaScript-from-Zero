const userEmail = "abc@gmail.com"
// const userEmail = ""
// const userEmail = []

if (userEmail) {
    console.log("yes");
    
}else{
    console.log("no");
    
}


// falsy values : flase, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values : "0", 'false', " ",[], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("empty");
    
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("empty");
    
// }

//false == 0 ----> true
//false == '' ----> true
//0 == '' ----> true



//Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 10 ?? 20
// val1 = null ?? 20
// val1 = undefined ?? 20


console.log(val1);


//Terniary Operator

const price = 100
price <= 50 ? console.log("less than 50") : console.log("more than 50");


