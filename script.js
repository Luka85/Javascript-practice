// Loops
// Samo z uporabo operatorjev (for, while)

//! 1. Define functions
// console.log("last", last(5, odds)); // => [23,25,27,29,31]
// console.log("from", from(3, 6, odds)); // => [7,9,11,13]
// console.log(
//   "rest",
//   rest((x) => x > 10, odds)
// ); // => [11,13,15,17,19,21,23,25,27,29,31]
// console.log("has", has(13, odds)); // => true
// console.log("has", has(24, odds)); // => false

const odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];

//*1. FOR & WHILE
function last(num, odds) {
  for (let i = odds.length - num; i < odds.length; i++) {
    while (i < odds.length) {
      array.push(odds[i]);
      i++;
    }
  }
  return array;
}

console.log("last", last(5, odds)); // => [23,25,27,29,31]

//*1. FOR
function last(x, odds) {
  const array = [];
  for (let i = odds.length - x; i < odds.length; i++) {
    array.push(odds[i]);
  }
  return array;
}

console.log("last", last(5, odds)); // => [23,25,27,29,31]

//*2. FOR & WHILE
function from(x, y, odds) {
  const array = [];

  for (let i = x; i <= y; i++) {
    while (i >= x && i <= y) {
      array.push(odds[i]);
      i++;
    }
  }
  return array;
}
console.log("from", from(3, 6, odds)); // => [7,9,11,13]

//*2. FOR
function from(x, y, odds) {
  const array = [];

  for (let i = x; i <= y; i++) {
    array.push(odds[i]);
  }
  return array;
}
console.log("from", from(3, 6, odds)); // => [7,9,11,13]

//*3.
function has(num, odds) {
  for (let odd of odds) {
    if (odd === num) {
      return true;
    }
  }
  return false;
}

console.log("has", has(13, odds)); // => true

//*4.
function has1(num, odds) {
  for (let odd of odds) {
    if (odd === num) {
      return true;
    }
  }
  return false;
}

console.log("has", has1(24, odds)); // => false

//*5.
function rest(x, odds) {
  const array = [];

  for (let i = 0; i < odds.length; i++) {
    if (x(odds[i])) {
      array.push(odds[i]);
    }
  }
  return array;
}

console.log(
  "rest",
  rest((x) => x > 10, odds)
); //  => [11,13,15,17,19,21,23,25,27,29,31]
