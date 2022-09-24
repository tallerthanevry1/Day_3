//////****************
// VARIABLES *//

//**************** */

//const = block scoped, cant resign
const one = 1
console.log(one)

// let - block scoped, can reassign
let two = 2
console.log(two)
two = 3
console.log(two)


//var (never use ) - not block scoped, can reassign
var three = 3
console.log(three)
three = 4
console.log(three)

// block scoping (block scoped variables only exist in the curly brakets they were delcared)