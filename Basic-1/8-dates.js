//Dates
let today =new Date()
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleString());
console.log(typeof today);


// let moredate = new Date(2025, 0 , 20)
// let moredate = new Date(2025, 0 , 20,8,0)
// let moredate = new Date("2025-01-20")
let moredate = new Date("01-20-2025")
console.log(moredate.toLocaleString());


let myTimestamp = Date.now()
// console.log(myTimestamp);

// console.log(moredate.getTime());
// console.log(Date.now()/1000);
//  console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getMonth()+1); //+1 because in js moths starts from 0

console.log(`the day  ${newdate.getDay()} and the time ${Math.floor(newdate.getTime()/1000)}`);

console.log(newdate.toLocaleDateString('default',{
    weekday: "long",
}));

