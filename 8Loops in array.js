
// 2. map() - takes value of a to e ,which can returned as required to b

// ex : PRINT SQUARE OF ELEMENTS OF THIS ARRAY

// let a=[1,2,3,6,8,15,20]
// b=[]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     b.push(element**2)
// }
// console.log(b)

// ==> USING MAP()

// let a=[1,2,3,6,8,15,20]
// let b=a.map((e)=>
// {
//     return e**2
// })
//     console.log(b)

// or 

// const users = [
//     { a: "Alice", age: 25 },
//     { a: "Bob", age: 30 },
//     { a: "Charlie", age: 35 }
// ];

// const names = users.map(user => user.a);
// console.log(names); // Output: ["Alice", "Bob", "Charlie"]

// or 
// let a= [1,2,3,4,5]
// let b=a.map(b=>b**2)
// console.log(b)
// -------------------------------------------

// 3. filter()

// print no.s greater than 7 in array
// let a=[1,2,3,6,8,15,20]
// const greater = (e)=>{
//     if(e>7)
//     {
//         return true
//     }
//     return false
// }
// console.log(a.filter(greater))
// // ------------------------------------------

// 4. reduce method

const a=[1,2,3,4,5,6]
let sum=number.reduce(add)
console.log(sum)
