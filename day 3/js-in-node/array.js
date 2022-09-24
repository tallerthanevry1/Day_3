//------------------
// Arrays
//------------------

// declare an array
const instructionalTeam = ["Alex", "Billie", "David", "Kyle", "Max", "Hisham"]

// log the whole array
console.log(instructionalTeam)

// access the first element
console.log(instructionalTeam[0])

// edit a value
instructionalTeam[0] = "Alex Merced"
console.log(instructionalTeam)
:white_check_mark:
46
:gandalf:
2

//ARRAY METHODS
instructionalTeam.push("August") // add to the end of the array
instructionalTeam.unshift("Amber") // adds to beginning of the array

console.log(instructionalTeam)


instructionalTeam.pop() // remove last item
instructionalTeam.shift() // remove first item

console.log(instructionalTeam)


// Splice 
// array.splice(where to start splicing, how many things to remove, anything you want)

const nums = [1,5,6,7,3]

nums.splice(1,3,2)

console.log(nums)

// Looping over an array

const pokemon = ["Pikachu", "Mew", "Snorlax"]

for(let counter = 0; counter < pokemon.length; counter += 1){
    const poke = pokemon[counter]
    console.log(poke)
}

for(let poke of pokemon){
    console.log(poke)
}

// Multi-Deimentionals 

const arr = [1.2.[3.4.[5,6],[7,8]]

console.log (arr[2][0])

this array [5,4,3,2,1]
let arrToSort = [5, 4, 3, 2, 1];
arrToSort.sort();
console.log(arrToSort);


