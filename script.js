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

//! 2. Define more functions
// console.log("max", max(randoms)); // => 21.4
// console.log("min", min(randoms)); // => 0.05
// console.log("sum", sum(randoms)); // => 108.72999999999999

const randoms = [
  3.0, 7.3, 1.01, 0.3, 0.05, 1.4, 9, 8, 7.77, 3.2, 12.4, 18.9, 15.0, 21.4,
];

// *1.
function max(randoms) {
  let max = randoms[0];
  for (let i = 0; i < randoms.length; i++) {
    if (randoms[i] > max) {
      max = randoms[i];
    }
  }
  return max;
}
console.log("max", max(randoms)); // => 21.4

//*2.

function min(randoms) {
  let min = randoms[0];
  for (let i = 0; i < randoms.length; i++) {
    if (randoms[i] < min) {
      min = randoms[i];
    }
  }
  return min;
}
console.log("min", min(randoms)); // => 0.05

//*3.
function sum(randoms) {
  let sum = 0;
  for (let random of randoms) {
    sum += random;
  }
  return sum;
}

console.log("sum", sum(randoms)); // => 108.72999999999999

//! 3. Define even more functions
const names = [
  "Reinhold",
  "Mathias",
  "Hans",
  "Ludwig",
  "Walter",
  "Joseph",
  "Munther",
];

//* 1.
function startsWith(letter, names) {
  const array = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i][0].toLowerCase() === letter) {
      array.push(names[i]);
    }
  }
  return array;
}
console.log("startsWith", startsWith("m", names)); // => ['Mathias','Munther']

//* 2.
function byLength(num, names) {
  const array = [];
  for (let name of names) {
    if (name.length === num) {
      array.push(name);
    }
  }
  return array;
}
console.log("byLength", byLength(4, names)); // => ['Hans']

//* 3.
function longest(names) {
  let longest = names[0];
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > longest.length) {
      longest = names[i];
    }
  }
  return longest;
}

console.log("longest", longest(names)); // => 'Reinhold'

//* 4. FOR LOOP
function myFilter(func, names) {
  const array = [];
  for (let i = 0; i < names.length; i++) {
    if (func(names[i])) {
      array.push(names[i]);
    }
  }
  return array;
}

console.log(
  "myFilter",
  myFilter((x) => x == "Ludwig", names)
); // => ['Ludwig']

//* 4.  WHILE LOOP
function myFilter(func, names) {
  const array = [];
  let i = 0;
  while (i < names.length) {
    i++;
    if (func(names[i])) {
      array.push(names[i]);
    }
  }
  return array;
}

console.log(
  "myFilter",
  myFilter((x) => x == "Ludwig", names)
); // => ['Ludwig']

//! 4. Define funcions
// Can't use Array.map(), filter, some, every ..
// Only with For || while

// *1.
function map(odds, func) {
  const array = [];

  for (let i = 0; i < odds.length; i++) {
    array.push(func(odds[i]));
  }
  return array;
}

console.log(map(odds, (x) => x + 1)); // => [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32]

//* 2.
function filter(odds, func) {
  const array = [];
  for (let i = 0; i < odds.length; i++) {
    if (func(odds[i])) {
      array.push(odds[i]);
    }
  }
  return array;
}
console.log(filter(odds, (x) => x < 6)); // => [1, 3, 5]

//* 3.
function some(odds, func) {
  for (let odd of odds) {
    if (func(odd)) {
      return true;
    }
  }
  return false;
}
console.log(some(odds, (x) => x > 20)); // => true

//* 4.

function every(odds, func) {
  for (let i = 0; i < odds.length; i++) {
    if (!func(odds[i])) {
      return false;
    }
  }
  return true;
}
console.log(every(odds, (x) => x > 20)); // => false

//*5. REDUCE

function reduce(odds, func) {
  let total = 0;

  for (let i = 0; i < odds.length; i++) {
    total += odds[i];
    console.log(
      `i:${i}, odds[i]:${odds[i]}, total:${total}`,
      func(total, odds[i])
    );
  }
  return total;
}
console.log(reduce(odds, (x, y) => x * y));
