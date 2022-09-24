//---------------------------
// Control Flow 
//---------------------------

// If statements
// if (expression) {true} else {false}

if (3 > 5){
    console.log("Hello")
} else {
    console.log("goodbye")
}

//everything except false, 0, null, undefined, NaN, ""(empty string)"",
// string with no space is false, string with space is true. 


//----------------------------------
// Loops
//-----------------------------------


// while
//while (expression) {repeat this code as long as expression is true}

let counter = 0

while (counter < 10){
    console.log("counter is now...", counter)
    counter += 1
}


// For Loop
// for(declare counter;expression;increment){}
for (let counter = 0; counter < 10; counter += 1){
    console.log(counter)
}

for (let counter = 0; counter < 100; counter +=3) {
    if(counter % 2 === 0){
        console.log(counter)
    }
 }

