//Immediately Invoked Function Expressions (IIFE)

(function user(){  //this is named iife
    console.log(`connected`);
    
})() ; //remove global pollution 

(()=>{
    console.log(`hey`);
    
})();

((name)=>{
    console.log(`${name}`);
    
})('shubhankar')