// const name = "shubh"
// const age = 50

//console.log(name+age+"value"); //not recomended

// console.log(`hi my name is ${name} and my age is ${age}`);//stream interpolation

const anothername = new String('shubhankar-ch-das')

console.log(anothername[0]);
console.log(anothername.__proto__);
console.log(anothername.length);
console.log(anothername.toLowerCase);
console.log(anothername.charAt(2));
console.log(anothername.indexOf('s'));

const newstring = anothername.substring(0, 4)
console.log(newstring);

const newstrings = anothername.slice(-5, 4)
console.log(newstrings);

const newstringmore = "   shubh   "
console.log(newstringmore);
console.log(newstringmore.trim());

const url = "https://shubhankar.com/shubhankar%20das"

console.log( url.replace('%20', '-'));

console.log();

console.log(url.includes('shubhankar'));

console.log(anothername.split('-'));






