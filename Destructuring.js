/*
very usefull to destructure data from array or object;


*/

var jhon = ["jhon", 26];
var name = jhon[0];
var age = jhon[1];

// es6

const [name6, year6] = ["jhon", 26];
console.log(name6, year6);

const obj = {
  firstname: "jhon",
  lastName: "smith"
};

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age6, retirementt] = calcAgeRetirement(1993);
console.log(age6);
console.log(retirementt);
