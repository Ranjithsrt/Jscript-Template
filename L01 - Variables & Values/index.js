Java script:


The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.
Java script identifiers

---------------------------------------------------------------------------------------------------------

  
All JavaScript variables must be identified with unique names.

  

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.

Names must begin with a letter.

Names can also begin with $ and (but we will not use it in this tutorial).

3.Names are case sensitive (y and Y are different variables).

4.Reserved words (like JavaScript keywords) cannot be used as names.

-------------------------------------------------------------------------------------------------------

js print :

console.log("Hello World ");

-------------------------------------------------------

Declare and initialize a variable:

let x=10;
console.log(x);

-------------------------------------------------------

Declare var variable :
  
var a; #Error undefined 

--------------------------------------------------------

Initialize the variable :

var a = 10;

-------------------------------------------------------

Redeclaration allowed :

var a = 100;
console.log(a);

Output :
100

---------------------------------------------------
  
Declare let variable :
  
let b;

----------------------------------------------------
  
Initialize the variable :

let b = 10;

------------------------------------------------------
  
Redeclaration is not allowed :

let b =100; 

------------------------------------------------------

  
Reassignment is allowed :

b = 200;
console.log(b);

output:

200

--------------------------------------------------------------

 cons must Declare & initialize 1st line :

const PI=31415 ; //fixed Value Called Constant

console.log (PI);

----------------------------------------------------------------

Reassignment is not allowed :

const c = 1;
c = 2;

console.log(c);  //ERROR{ invalid assignment to const "pi"


------------------------------------------------------------------

 Naming conventions :

correct way :

Correct camel Case convention :

let userName = 'John'; 


Underscore is not recommended but valid :

let user_Name ='Max'; 


start from Underscore :

let _userName ='Doe'; 

start from dollar symbol :

let $userName='Evo' ; 

--------------------------------------------------------

Incorrect variable names :

Invalid: variable names cannot start with a number

let 5date= 5;

-------------------------------------------------------------
  
Resrved keywords (Functions):


let new = "data";
let function = 20;

-----------------------------------------------------------------
  
Symbols in variable names :


let #function = 'data'; 
let @function = 'data';
let John&Jane = 'Friends'; 

------------------------------------------------------------
  
let $function = 'data';  #this one is correct

------------------------------------------------------------

  
string concatenate :


console.log('Welcome' + userName);
console.log('Hi' + userName);
console.log('Bye '+ userName);

------------------------------------------------------------

Scope of variables will on functions & loops :

var: Function scoped.
let: Block scoped.
const: Block scoped 

--------------------------------------------------------------
