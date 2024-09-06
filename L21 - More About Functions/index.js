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
