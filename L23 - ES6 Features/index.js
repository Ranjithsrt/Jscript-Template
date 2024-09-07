

Arrow Functions

ES5

 function add(a, b) {

  return a + b;

}

ES6

const add = (a, b) => a - b;

Variable Declarations

ES5

var num1 = 10; //old feature 

ES6

let num2 = 20;      // new features 

const PI = 3.145;

Template Literals

ES5

var name = 'Alice';

console.log('Hello, + name + '!');

ES6

console.log(Hello, ${name}!');

Object Destructuring

ES5

var userOne = { firstName: 'John', lastName: 'Doe' };

console.log(userOne.firstName);

console.log(userOne.lastName);

ES6

var userTwo = { firstName: 'Jane', lastName: 'Doe' }; 

const { firstName, lastName } = userTwo;

console.log(firstName);

console.log(lastName);


Default Parameters

ES5

function greet (name) { 
  
  name = name || 'Guest';

console.log('Hello,+ name +'! ') ;

}

greet('Karthik');

ES6

function greetUser(name = 'Guest') 

{ console.log('Hello, ${name}!`);

}

greetUser('Alex');

String concatenate 


ES5

let x = [1, 2, 3] ;

let y = [4, 5, 6] ; 

let z = x.concat(y); console.log(z);

ES6

let combined = [...x, ...y]; 

console.log(combined);
