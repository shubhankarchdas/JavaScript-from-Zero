const user = {
    username:"shubhankar",
    email:"shubhankar@gmail.com",
    welcomMessage: function(){
        console.log(`${this.username} welcome to Exten`);
        console.log(this);
        
    }
}

user.welcomMessage()
user.username = "sss"
user.welcomMessage()


console.log(this);

// function arrow(){
//     console.log(this);
    
// }

const arrow = () => {
    let username = "shubh"
    console.log(this.username);
    
}



// arrow()

// const addTwo = (n1,n2) => {
//     return n1+n2       //explicitly return
// }


// const addTwo = (n1,n2) => n1+n2
// const addTwo = (n1,n2) => (n1+n2)   //implecitly return
const addTwo = (n1,n2) => ({username:"shubhankar"})
console.log(addTwo(5,5));




