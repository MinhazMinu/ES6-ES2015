/*

let = value can be changed ;
const = value cant not be changed;
both only exist in its near scop. (block scoped)
but Var can be accessed from its parents scop (function scop)

*/

// variable Declaration in ES5

var name5 = "minhaz";
var ages5 = 28;
name5 = "minhaz minu";
console.log(name5); // here name variable is changed to minha minu;

// ES6

const name6 = "minhaz"; // now name cannot be changed
let = 29; //age can be changed like var . but deference between var and let is in there scop are.
// name6 = "minhaz taher"; // TypeError: Assignment to constant variable.

// scop deference

// es5
function driverLicence5(passedTest) {
  if (passedTest) {
    var firstName5 = "minhaz";
    var yearOfBirth5 = 1999;
    console.log(firstName5 + " born in " + yearOfBirth5 + " so he is legal ");
  }
  // this var veriable also works out side of if block. because var workes in function scop
  console.log(firstName5 + " born in " + yearOfBirth5 + " so he is legal ");
}

driverLicence5(true);

// es6

function driverLicence6(passedTest) {
  if (passedTest) {
    let firstName6 = "minhaz";
    const yearOfBirth6 = 1999;
    console.log(firstName6 + " born in " + yearOfBirth6 + " so he is legal ");
  }
  // this let and const variable do not work out side of if variable , because these works in block scop
  // ReferenceError: firstName6 is not defined
//   console.log(firstName6 + " born in " + yearOfBirth6 + " so he is legal ");
}
driverLicence6(true);

//  another situation where const wont work
function driverLicence6(passedTest) {
    let firstName6;
    const yearOfBirth6;
    if (passedTest) {
         firstName6 = "minhaz";
         yearOfBirth6 = 1999;
        
    }
    // this also wont work .  SyntaxError: Missing initializer in const declaration
   
    console.log(firstName6 + " born in " + yearOfBirth6 + " so he is legal ");
}
driverLicence6(true);


// it can be done ase

function driverLicence6(passedTest) {
    let firstName6;
    const yearOfBirth6 =1999;
    if (passedTest) {
        firstName6 = "minhaz";
    

    }
    // this also wont work .  SyntaxError: Missing initializer in const declaration

    console.log(firstName6 + " born in " + yearOfBirth6 + " so he is legal ");
}
driverLicence6(true);


