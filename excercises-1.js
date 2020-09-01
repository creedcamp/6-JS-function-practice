// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
function sum(a, b) {
  return a + b
}

console.assert(sum(2, 4) === 6)
console.assert(sum(45, 23) === 68)
console.assert(sum(-2, -57) === -59)

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
function avg(a, b, c) {
  return (a + b + c) / 3
}

console.assert(avg(2, 3, 4) === 3)
console.assert(avg(234, 63, 234) === 177)
console.assert(avg(123, 234, 345) === 234)

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(a) {
  return a.length
}

console.assert(getLength("Michael") === 7)
console.assert(getLength("Javascript") === 10)
console.assert(getLength("supercalifragilisticexpialidocious") === 34)

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the first
// parameter is greater than the second. Otherwise
// the function should return `false`.

function greaterThan(a, b) {
  return a > b
}

console.assert(greaterThan(2, 1) === true)
console.assert(greaterThan(23, 23) === false)
console.assert(greaterThan(-234, 1) === false)

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(name) {
  let sentence = "Hello, " + name + "!"
  return sentence
}

console.assert(greet("Michael") === "Hello, Michael!")
console.assert(greet("R2D2") === "Hello, R2D2!")
console.assert(greet("Iron Man") === "Hello, Iron Man!")

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

console.assert(
  madlib("quick", "fox", "jumps", "fence") ===
    "The quick brown fox jumps over the fence."
)
console.assert(
  madlib("fat", "rabbit", "hops", "wall") ===
    "The fat brown rabbit hops over the wall."
)
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
