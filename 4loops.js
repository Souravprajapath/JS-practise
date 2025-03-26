// 1. for loop

for(let a=0;a<4;a++){
    console.log(a+1)
}


// 2. for in loop

const obj={
    name:"sourav",
    age:"23"
}
console.log(obj) 

for (const key in obj) {
 console.log(key)  
}


// 3. for of loop

for (const a of "sourav") {
    console.log(a)
}


// 4.while loop

let b=1;
while (b<5) 
    {
    console.log(b)
    b++
}

// 5.do while loop

let c=1;
   do {
    console.log(c)
    c++
}while (c<2) 
