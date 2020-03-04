// class

// es5
var Person5 = function(name, yearOfbith, job) {
  this.name = name;
  this.yearOfbith = yearOfbith;
  this, (job = job);
};
Person5.prototype.calcAge = function() {
  var age = new Date().getFullYear - this.yearOfbith;
};

var jhon5 = new Person5("minhaz", 1993, "designer");

// ES6

class Person6 {
  constructor(name, yearOfbith, job) {
    this.name = name;
    this.yearOfbith = yearOfbith;
    this.job = job;
  }

  calcAge6() {
    var age = new Date().getFullYear - this.yearOfbith;
  }

  static greeting() {
    console.log("hey");
  }
}
const jhon6 = new Person6("jhon", 1990, "teacher");

console.log(jhon5 + "  " + jhon5);
Person6.greeting();
