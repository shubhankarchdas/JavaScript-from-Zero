function abc(){
    // console.log("a");
    // console.log("a");
    // console.log("a");
    // console.log("a");
    // console.log("a");
    
}
//abc-->reference       abc()--> execution

abc()

function addTwoNum(n1,n2){  //parameters
    // console.log(n1+n2);
    
}

// addTwoNum(5,5)  //arguments

function addTwoNumber(n1,n2){  //parameters
    // let result = n1+n2
    // return result
    return n1+n2
    
}

const result = addTwoNum(5,5)  //arguments

// console.log(result);


function loginUserMessage(username){ //passing default value like this username = "abc"
    if (username === undefined) {     //if(!username)  because here username is undefined ,in javascript somethings are false like undefined,"" etc so we use not(!)
        console.log("please enter the username");
        return
    }
    return `${username} is active`
}

console.log(loginUserMessage("shubhankar"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());



function calculateCartPrice(...num1){ //rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,500));

const user = {
    username: "shubhankar",
    price: "2000"
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"shubh",
    price: "200"
})


const myNewArray = [200,300,400]

function returnsecondvalue(getarray){
    return getarray[1]
}

// console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([2000,3000,4000]));






