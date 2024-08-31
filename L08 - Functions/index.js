Functions

Functions are pieces of code that we can reuse again and again in our code

Function Declaration - JavaScript Hoisting

syntax:

function functionName( ){

// code block
 
}

functionName()  //calling function

Example:


function msg( ){

console.log("Hii...Hello");
 
}

msg()  //calling function
//msg()

output:

Hii...Hello
//Hii...Hello

----------------------------------------------------------------------------------------------------------------------

A function declaration defines a named function.It's hoisted,
 meaning you can call it before it's defined. 

Calling the function:

HOSTING

msg()  // valid  HOSTING

function msg( ){

console.log("Hii...Hello");
  
 
}

output:

Hii...Hello

----------------------------------------------------------------------------------------------

Function Parameters and Arguments


syntax:
                        //input 
function functionName( parameter ){

// code block   //output
 
}

functionName( arguments)  //calling function

Functions can take parameters, which act as placeholders for the values 
that will be passed to the function.The passing value is called an argument.


function msg( name ){

console.log("Hii...Hello" + name);
 
}

msg( "ranjith") ;
msg( "kumar") ;


output:

Hii...Hello ranjith

---------------------------------------------------------------------------------------------------
 
multiple parameters

function msg( name ,age){

console.log("Hii", + name +" my age"+age);
 
}

msg( "ranjith",25) ;
msg( "kumar",20) ;

--------------------------------------------------------------------------------------------------------

Default Parameter

function printer(color){

console.log("print document in ${color} color");
 
}

//printer("blue") 
printer("blue") 

output:

document coloe blue color

 ---------------------------------------------------------------------------------------------------------

//red override
function printer(color="black"){

console.log("print document in ${color} color");
 
}

//printer("red") 
printer( ) 


output:

//document coloe red color

document coloe black color

----------------------------------------------------------------------------------------------------------

 Function with Return Type


function add( a,b){
     return a+b;
 
}
 
 let sum = add(10,20); //variable vechu assign panni print pannrom
 console.log(sum);  //30

 //console.log(add(10,20);   check pls

 --------------------------------------------------------------------------------------------------------------------------------

 Function Expression

A function expression defines a function inside an expression.
It's not hoisted, so you can't call it before it's defined.

syntax:

    variable      keyword
let functionName=function ( ){

   //code block
 
}

functionName()   // calling function


Ex:

 let msg = function( ){

 console.log("good morning");
 
}

msg( ) ;  //good morning 
 
----------------------------------------------------------------------------------------------------
 
With Argument

//msg( "ranjith") ;   // exp not hositing

let msg = function( name ){

console.log("good morning ${name}");
 
}

msg( "ranjith") ;  //good morning ranjith

--------------------------------------------------------------------------------------------------------------

Function Expression with Return Type

let mul = function (a,b){
   return a*b;
 
};

let result = mul( 5,2 ){
console.log(result); //10

 //console.log(mul(4,7));

 -----------------------------------------------------------------------------------------------------

 Arrow Function

 Arrow functions provide a concise syntax and do not bind their own 'this'. They are not hoisted.

  
 syntax:

  
    variable      keyword
let functionName=( ) =>{

   //code block
 
}

functionName()   // calling function

 
Example:

let evening = ( ) =>{

 console.log("good evening everyone");
 
}

evening ()   // good evening everyone 

  
With Argument

//not hoisting
  
let evening = ( name ) =>{

 console.log("good evening " + name);
 
}

evening ("ajith")   // good evening ajith
  
----------------------------------------------------------------------------------------------------------------
 
 Arrow Function with Return Type

 
 let sub =( a,b ) =>{
    return a - b ;
 };

  console.log( sub(10,6); // 4
 
-------------------------------------------------------------------------------------------------------------------------
 
Shorter Way

let sub =(a,b) => a-b;
  
console.log(sub(10,6)); //4

 ----------------------------------------------------------------------------------------------------------

Function Calling Other Function


                       //ranjith
 function welcomeShopper(name){

 console.log(" welcome ${name} ! enjoy yoyr shopping experience")

}              //ranjith
    function main(name){

   // welcomeShopper(name); // direct calling
                   //ranjith
   let ShopperName-name;  // variableassign and after calling
                   //ranjith
   welcomeShopper(ShopperName); // calling top welcomeshopper
     
  };

  main("ranjith")  // welcome ranjith ! enjoy your.....

------------------------------------------------------------------------------------------------------------------
  
Anonymous Functions: Later on Course on Arrays

serTimeout(() => {

   console.log(" anonymous function executed");
  
 },2000 // 2sec delay  

 output: anonymous function executed
  
 ---------------------------------------------------------------------------------------------------------------------------           

Scope of variables will on functions and loops

  
var: Function scoped.

Ex:

function demo(){
    var a =20;
    console.log(a); 
   
  }
demo();
console.log(a)  //error function outside calling

 
  
let: Block scoped.
const: Block scoped.

 Ex:

 function demo(){
     var a =20;
     console.log(a); 

   if (true){

   var x = "var";
   let y = "let";
   const z = ""const;     /// block scop

   console.log(x);
   console.log(y);    // all working good ...if block
   console.log(z);
   
  }
   console.log(x); // outer block code run successfully  (var)   
   console.log(y);   // error  (let)
   console.log(z);   // error not defienfd  (const)
  
 demo();

console.log(a)
 
