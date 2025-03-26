// { Diff between normal function, and => functoin }

// // 1. Syntax

const func_name = (/*parameters*/) => {
    //agruments
}

// example : addd 2 no.s

//normal function

// function add(a,b)
// {
//     return a+b
// }
// let c=add(2,3)
// console.log(c)

////////////

//writing arrow functions for this now

// const add = (a,b) => {
//     return a+b
// }
// let c=add(2,3)
// console.log(c)

///////////////////////////////////////

// one liner functon

// const add = (a,b) => a+b; //one liner
// let c=add(2,3)
// console.log(c)
///////////////////////////////////////

// //2. "arguments " keyword is not avaialble

//"agruments are the No.s passed for a functon to execute"
//so we use ....nums

const addnum=(...nums)=>{
    console.log(nums)
}
addnum(1,2,3,)  // output : [1,2,3]

// // 3. hoisting is nt posible in =>() (means : calling a function before even it is declared)

//sayHey();  (would work for normal functoin)
const sayHey=()=>{
    console.log("Hey There")
}

sayHey();

// // 4. This keyword
const obj={
    age:25,
    myFunc: function(){
        console.log(this)
    }
}
obj.myFunc()