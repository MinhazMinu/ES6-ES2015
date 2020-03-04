//  string

//  ES5

var firstName = " Minhaz";
var lastName = "Hasib";
var yearOfBirth = 1993;

console.log(
  "Hi i am " + firstName + " " + lastName + " , i born in " + yearOfBirth + "."
);

// es6

let firstName6 = "minhaz";
let lastName6 = "hasib";
const yearOfBirth6 = 1993;

console.log(`Hi i am ${firstName6} ${lastName6} , i born in ${yearOfBirth6}.`);

// some more string method

const n = `${firstName6} ${lastName} `;

n.startsWith("m"); // answer true
n.startsWith("j"); // answer false

n.endsWith("b"); // answer true
n.endsWith("j"); // answer false

n.includes(" "); // answer true
n.includes(" x"); // answer false

console.log(n.repeat(3));
