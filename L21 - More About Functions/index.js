Higher-order Functions:

Functions that take other functions as arguments or return them as results.
  
function startEngine() {
  
return 'is started!';

}

// Higher-order function
function drive(driverName, engine) {
  
const message = engine(); // Callback function
  
console. Iog(' ${message} by ${driverName}' )

}
  
drive( ' Alex ' , startEngine);

output:

Engine is started! by Alex

-------------------------------------------------------------------------------------------------------------------------

Pure Functions: Functions that, given the same input, 

will always return the same output and have no side effects.

  
// Pure function
functionadd(a, b) {
  
return a + b;
  
console.log(add(2,3)); //5
console.log(add(2,3));  //5
console.log(add(2,3)); //5


  ---------------------------------------------------------------------

    
// Impure function
    
let counter =0;
  
function increment(value) {
  
   counter += value;
   return counter;

}
  

console.log(increment(2));
console.log(increment(2));
console.log(increment(2));

------------------------------------------------------------------------------------------
