/*



*/ const boxes = document.querySelectorAll(".box");

// es5  =  create Array from nodeList
var boxesArray = Array.prototype.slice.call(boxes);

boxesArray.forEach(function(cur) {
  cur.style.backgroundColor = "orange";
});

// es6

const box6 = Array.from(boxes);
box6.forEach(cur => (cur.style.backgroundColor = "blue"));

// loop over array

// foreach and map cannot break/continue loop

for (var i = 0; i < box6.length; i++) {
  if (box6[i].className === "box blue") {
    continue;
  }
  box6[i].textContent = "changed";
}

for (const i of box6) {
  if (box6.className === "box blue") {
    continue;
  }
  cur.textContent = "i changed to blue";
}

var ages = [12, 32, 45, 6, 7, 8];

// es5
var full = ages.map(function(cur) {
  return cur >= 15;
});

console.log(full);

console.log(full.indexOf(true));
