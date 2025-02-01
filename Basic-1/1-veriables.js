const accountId = 123456 //could't change values after 
let accountEmail = "shubhankar@gmail.com"
var accountPassword = "1234"
accountCountry = "India"


// accountId = 11111 //not allowed
accountEmail = "s@gmail.com"
accountPassword = "4321"
accountCountry = "USA"
let accountState;

console.log(accountId);
console.table([accountEmail,accountPassword,accountCountry,accountState]);

/* not using var
because of issue in block scope and functional scope
*/