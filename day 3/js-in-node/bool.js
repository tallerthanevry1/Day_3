//----------------------------------
// Boolean Operators
//----------------------------------

const a = 5
const b = 8

// Equality
console.log(a === b) // strict equality
console.log(a == b) // loose equality

console.log(a === "5") // false
console.log(a == "5") // true

// inequality
console.log(a !== b) // strict equality
console.log(a != b) // loose equality

console.log(a !== "5") // true
console.log(a != "5") // false

// greater/less than
console.log(a < b) // less than
console.log(a <= b) // equal or less than
console.log(a > b) // greater than
console.log(a >= b) // equal or greater than

// Compound Operations
console.log(a < b && a > b) // false
console.log(a < b || a > b) // true

const c = a < b && a > b
console.log(c)