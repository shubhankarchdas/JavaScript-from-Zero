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