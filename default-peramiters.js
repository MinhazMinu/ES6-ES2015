// es5

function Person(firstName, yearOfBirth) {
  yearOfBirth === undefined
    ? (yearOfBirth = 1990)
    : (yearOfBirth = yearOfBirth);
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
}

var jhon = new Person("jhon");

// es6

function Person6(firstName, yearOfBirth = 1990) {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
}

var jhon = new Person("jhon");
