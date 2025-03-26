//shortcut to create an array
let a = 6
function souru(number) {
    let arr = Array.from(Array(number + 1).keys())
    console.log(arr.slice(1))
    let c = arr.slice(1).reduce((a, b) => {
        return a * b
    })
    console.log(c)
}
souru(a)



// // basic
// let array = [1, 2, 3, 4, 5]
// //INdex   =  0  1  2  3  4

// console.log(typeof array) // @ typeof array is Object
// console.log(array)
// console.log(array.length)
// console.log(array[0]) //display array of 0 index

// array[0]=5666; //changed "0" index item into "5666"
// console.log(array[0])

// // ex:
// let a="harry"
// a[0]="k"
// console.log(a)//the output wont bcoz string cant be change like this

// console.log(array.toString()) // array is converted intpo string
// console.log(array.join(" and ")) // now in this betweeen evry number there is "and"

// console.log(array.pop())// used to remove the last element of the array
// console.log(array) // array without last number after using pop

// console.log(array.push(100)) // used to add new element "100" at the end of array
// console.log(array.push("sourAV"))
// console.log(array)

// console.log(array.shift())// removes the first element nd prints it
// console.log(array)
// console.log(array.unshift("jack"))// adds new first element nd prints it
// console.log(array)

// //
// let c = [1, 2, 3, 4, 5]
// console.log(c.splice(1,3)) //removes items from index 1 to 3
// console.log(c)

// let d = [1, 2, 3, 4, 5]
// console.log(d.splice(1,3,222 ,12)) // adds "222 nd 12" and removes indes 1 to 3
// console.log(d)
// //
// let e = [1, 2, 3, 4, 5]
// console.log(e.slice(2))// prints from index 2 incuklding it till end
// console.log(e)

// let f = [1, 2, 3, 4, 5]
// console.log(f.slice(1,3))// prints from index 1 inclding it till 3 index without including it
// console.log(f)
// //