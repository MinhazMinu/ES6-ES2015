//  Amazing edition of function in es6 is arrowfuntion.
// its clean and vary easy to wright

// ES5 function in es5

var years = [1886, 1545, 2009, 2001];

var ages5 = years.map(function(el) {
  return 2020 - el;
});
console.log(ages5);

// ES6  = so simple and elegant!!!

let ages6 = years.map(el => 2020 - el);
console.log(ages6);

// need () if multiple argument

ages6 = years.map(
  (el, index) => `Age is  element  ${index + 1} :  ${2016 - el}. `
);

console.log(ages6);

// need {} if multiple line of code. and need to return explicitly

ages66 = years.map((el, index) => {
  const d = new Date().getFullYear();
  const age = d - el;
  return ` ${age} index is ${index}`;
});

console.log(ages66);
