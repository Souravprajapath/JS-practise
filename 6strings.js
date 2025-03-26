// here where just creating a strings but we cant the actual string "a"

// basic string delcaration

let myname = "haary"
console.log(myname)

// -------------------------

// template literals
// uses back single quotos

let name =`haary`

// --------------------------

let mname = "sourav"
let friend = "vikash"
console.log("my name is " + mname + " and friend name is "+ friend)
// or
console.log(`my name is ${mname} and friend name is ${friend}` )

// ----------------------------

//strings properties and methods

let a = "sourav"
b = "sangi"
console.log(a.length)
console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.slice(1, 4))//displays only the array elemts which are from 1 to 5,1is include 4not included
console.log(a.slice(2)) //display evry digit expect digit before 2 but including 2

console.log(a.replace("ur", "55")) // replace the "ur" with "55"
console.log(a.concat(b)) // combine a and b together
console.log(a.concat("viku")) // add "viku" to a
console.log(a.concat(b, "viku")) // adds b and "viku" both together wiht a





