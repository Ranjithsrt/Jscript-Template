Decision Making: if, if...else, else if

Decision making or control flow in programmming is the way we coontrol the execution
of code based on certain conditions.this allows the program to make choicces and execute diff code paths.

console.log('Decision Making');

-------------------------------------------------------------------------------------------------------------------------------------

Example 1: if statement

syntax:

if (condition){
  
  //code block 
  
}

Example:
             f    f   t
let temp =  #24  #25  25;

if (temp>=25);
{
  
console.log("it is hot outside");
  
}

-----------------------------------------------------------------------------------------------------------------------------------------
  
Example 2: if...else statement


syntax:

if (condition){
  
  //code block 
  
}
else{

   //code block 
  
}

Example:

if (temp>=25);

{
  
console.log("it is hot outside");
  
}
else{
  
console.log("it is cold outside");
  
}

Example:

let isRaining= #true false;

if (isRaning);
{
  
console.log("take an umbrella");
  
}
else{
  
console.log(" you don't need an umbrella");
  
}

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Example 3: else if statement

syntax:

if (condition){
  
  //code block 
  
}
else if(condition){

   //code block 
  
}
else{

   //code block 
  
}

Example:

let time=14;

if (time<12){
  
console.log("good morning"); 
  
}
else if(time<18){

 console.log("good afternoon");  
  
}
else{

 console.log("good evening");  
  
}


-----------------------------------------------------------------------------------------------------------------------------------------------------

Example 4: Nested if statements

Variables

let age= 16;
let iswithparents=true;
let idproof=true;


Decision logic

if (age>=18);{
  
  if(idproof);
    console.log("you can visit the mall and can able to watch the movie"); 
  } else{
     console.log("you can visit te mall"); 
  }
}else{
     if(iswithparents);
        console.log("you can visit the play area"); 
  } else{
     console.log("you are not allowed in the play are"); 
  }
  
}

Example:


let day=1;

if(day===1){
  console.log("monday"); 
}
else if(day===2){
  console.log("thuesday"); 
}
else if(day===3){
  console.log("wenday"); 
}
else if(day===4){
  console.log("thuesday"); 
}
else if(day===5){
  console.log("friday"); 
}
else{
console.log("in valid"); 
}

-------------------------------------------------------------------------------------------------------------------------

Switch Statement

syntax:

switch(vale){
  case 1:
     //code block  
      break;
  case 2:    
    //code block  
       break;
  case 3:
      //code block  
       break;
  Default:
      //code block  
       break;
}


Exmple1:


let day=3;

switch(day){
    
  case 1:
      console.log("monday"); 
      break;
  case 2:
      console.log("thuesday"); 
      break;
  case 3:
      console.log("wensday"); 
      break;
  case 4:
      console.log("thresday"); 
      break;
  case 5:
      console.log("friday"); 
      break;
   default:
      console.log("invalid"); 
}

output:

wensday

----------------------------------------------------------------------------------------------------------
  
Exmple2:

let choice='tea';

switch(choice){
    
   case 'coffee':
      console.log("you choose coffee monday"); 
      break;
   case 'tea':
      console.log(" you choose tea thuesday"); 
      break;
    case 'water':
      console.log(" you choose water thuesday"); 
      break;
    default:
      console.log("invalid"); 
}

output:

you choose tea 

----------------------------------------------------------------------------------------------------------

Ternary Operator

short hand if else

let isadmin =true;

/*if(isadmin){
  console.log("am  admin");
}
else{
   console.log("am  user");
} */

                 true        .
let userrole = isadmin ? " am admin ":" am user ";
console.log(userrole);



let mark=60;
     var        cond      if       else
let result = mark>=30 ? " pass ":" fail ";
              //true
//let result = 25>=30 ? " pass ":" fail ";

console.log(result); 

output:

pass

------------------------------------------------------------------------------------------------------------------------------
