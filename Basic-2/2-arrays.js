const marvel = ["loki","thor","venom"]
const dc = ["gost-rider","batman","superman"]

// marvel.push(dc)
// console.log(marvel[3][1]);

// const mar = marvel.concat(dc)
// console.log(mar);

const mar = [...marvel,...dc]  //sprade operator
// console.log(mar);

const aarray = [1,2,3,[4,5,6],7,[8,9,[7,6]]]
const arry = aarray.flat(Infinity)
// console.log(arry);


// console.log(Array.isArray("shubhankar"));
// console.log(Array.from("shubhankar"));
// console.log(Array.from({name: "shubhankar"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.from(score1,score2,score3));


