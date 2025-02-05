//for 

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("number is 5");
        
    }
    // console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j}`);
        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
}

let myArray = ["username","email","password"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
      
}

//break and continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log("successfully finding 5");
        // break;
        continue
    }
    console.log(`value of i is ${i}`);
    
}