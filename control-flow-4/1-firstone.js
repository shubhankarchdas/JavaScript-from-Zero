//if
 const is_Active = true
 const temp = 32
 if (temp<50) {
    console.log("temperature less than 50");
    
}else{
    console.log("temperature grater than 50");
}

if (2 == "2") {
    console.log("yes");   
}else{
    console.log("no");  
}

if (2 === "2") {
    console.log("yes");    
}
else{
    console.log("no");    
}


const balance = 50000
if (balance < 500) {
    console.log("less than 500");
}else if(balance <1000){
    console.log("less than 500");
}else if(balance <10000){
    console.log("less than 10000");
}else{
    console.log("it is 5000");   
}


const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("allow");
    
}else{
    console.log("not allow");
    
}

if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("verify");
}