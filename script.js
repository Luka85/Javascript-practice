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
    for (let j = 0; j < names[i].length; j++) {
      if (names[i][j].toLowerCase() === letter) {
        array.push(names[i]);
      }
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

//* 4. WHILE LOOP
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
