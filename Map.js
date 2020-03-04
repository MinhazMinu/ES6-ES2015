// entirely new

const question = new Map();
question.set("question", "what is latest name oj Js Version");
question.set(1, "ES7");
question.set(2, "ES6");
question.set(3, "ES5");
question.set("correct", 2);
question.set(true, "correct answer");
question.set(false, "wrong answer");
console.log(question);

console.log(question.get("question"));
console.log(question.size);
question.delete(3);
console.log(question);

if (question.has(4)) {
  console.log("Here is 4");
}

question.forEach((value, key) => console.log(` ${key} => ${value}`));

for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer is ${key}: ${value}`);
  }
}

const ans = parseInt(prompt("Write the number correct number"));

console.log(question.get(ans === question.get("correct")));
