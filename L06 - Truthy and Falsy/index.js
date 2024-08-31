Truthy and Falsy Values:

in Javascript, truthy and falsy values are used to determine whether a value evaluate to true or false in a boolean
context.this concept is crucial for controlling the flow of your program using conditions like if statement.

console.log('Truthy and Falsy Values');

Falsy Values: 0," ",null,NaN,false,undefined 

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(' '));  //empty alse
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false not a number
console.log(Boolean(false)); //false


Truthy Values: any value that is not falsy

console.log(Boolean(1)); //true
console.log(Boolean(1833933)); //true
console.log(Boolean(-1)); //true
console.log(Boolean("hello")); //true
console.log(Boolean(1)); //true
console.log(Boolean([])); //true emptybarray
console.log(Boolean({})); //true empty object
console.log(function (){}); //true

Example:

           t     f
let cash =255  //0 ; 
    //conditions false  statement block not run
if (cash){
  console.log("you can buy burger with drink"); 
}else{
   console.log("you can buy burger"); 
}else{
   console.log("you don't have money"); 
}

let a;
console.log(a); //false

output:
undefined 

let a = 10;
console.log(a); //true


let a = null;
console.log(a); //false
