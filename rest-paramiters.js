// es5

function isFullAge5() {
  console.log(arguments);

  var argsArray = Array.prototype.slice.call(arguments);
  argsArray.forEach(function(cur) {
    console.log(2020 - cur) >= 18;
  });
}

// isFullAge5(1999, 1965, 1955);

// es6

function isFullAge6(...years) {
  console.log(years);
  years.forEach(cur => console.log(2016 - cur >= 18));
}
isFullAge6(1999, 1965, 1955);
