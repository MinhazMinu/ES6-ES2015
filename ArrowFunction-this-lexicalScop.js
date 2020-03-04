// Arrow function

// es5

var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
    var self = this; // in normal function tis refers to window object . so this is a hack to keep copy of this

    document.querySelector(".green").addEventListener("click", function() {
      var str =
        "this is box number " + self.position + " color is " + self.color;
      alert(str);
    });
  }
};

// box5.clickMe();

// es6

const box6 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", () => {
      alert(
        `this is the box number ${this.position} and color is ${this.color}.`
      );
    });
  }
};

box6.clickMe();

// es5 function constructure

function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + " is friend with " + el;
  });
  console.log(arr);
};

var friends = ["aaa", "bbb", "vvvv"];

Person.myFriends5();
