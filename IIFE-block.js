// IIFe can be achieved buy using only block. because let and const are block scop

// es5 IIFE

(function() {
  var a = 1;
  var b = 2;
})();
console.log(a + b);

// ES6

{
  const a = 1;
  let b = 2;
  var c = 30;
}
console.log(a + b); //ReferenceError: a is not defined
console.log(c); // it will work .because var
