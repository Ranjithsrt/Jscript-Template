 Datatypes:

 Javascript is Dynamic Typing

 Primitive and Object Type

----------------------------------------------------------------------------------------------------

Primitive Data Types:


1.Number - Represents both integer and floating-point numbers.

  
let age=10;  #equal two apram enna num,str,bool ex...automatic convert pannikum enna datatype nu.

console.log(age);
console.log(typeof age); 

output:

10
number

---------------------------------------------------------------------------------------------------------------------

age="25";

console.log(age);
console.log(typeof age); 

output:

string


-----------------------------------------------------------------------------------------------------------------

float number:


let price=19.99;

console.log(price);
console.log(typeof price); 


output:

19.999
number

---------------------------------------------------------------------------------------------------

2.String - Represents a sequence of characters.


let greeting="Hello World.!"

console.log(greeting);
console.log(typeof greeting); 

output:

string

------------------------------------------------------------------------------------------------------

3.Boolean - Represents a logical entity and can have two values: true or false.

let isActive=true;

console.log( isActive);
console.log(typeof  isActive); 


let isActive=false;

console.log( isActive);
console.log(typeof  isActive); 

-----------------------------------------------------------------------------------------------------------------

4.Undefined - A variable that has been declared but not assigned a value.

let name;  #Error undefined

console.log( a);
console.log(typeof a); 

----------------------------------------------------------------------------------------------------------------------------  

5.Null - Represents the intentional absence of any object value.

let name-null:

console.log(name);
console.log(typeof name); 

-------------------------------------------------------------------------------------------------

  
6.Symbol - Represents a unique and immutable value, often used as object property keys.


let unique=symbol("key"); #custom symbol

console.log(unique);
console.log(typeof unique); 

output:

symbol("key")

-----------------------------------------------------------------------------------------------------------------

7.BigInt - Represents whole numbers larger than 2^53 - 1 (the largest number JavaScript can reliably represent with the Number type).


let largeNumber=BigInt(68690356789000833);

let largeNumber=68690356789000833n; #using the n notation

console.log( largeNumber);
console.log(typeof largeNumber); 

output:

68690356789000833n

--------------------------------------------------------------------------------------------------------------

Non-Primitive Data Types"


1.Object


Represents a collection of properties, each consisting of a key (usually a string) 
and a value (which can be any data type, including another object).

let person={

  name-'ranjith'.
  age=25,
  isEmployed=true;
}

console.log( person); //total laa print agum

console.log( person .name);  // name only
console.log( person .age);  // age only
console.log( person .isEmployed);

console.log(typeof  person); 

-------------------------------------------------------------------------------------------------------------------------

2.Array

A special type of object used for storing ordered collections of values.

let number=[1,2,5,4,8];
console.log( number);

let mixdata=[1,'2',true,false,null,[1,2,'5',"str"] ,undefined ];
console.log( mixdata);

---------------------------------------------------------------------------------------------------------------------------------
  
3.Function

A special type of object that is callable and can perform an action.

function invite( ){
   console.log( "you are invitd");
}
invite()

----------------------------------------------------------------------------------------------------------------------

4.Date - A built-in object for handling dates and times.

let now- new Date;
console.log( now);

outut:
date wed jul 24 2024 09.00:51 Gmt( indian stamdard)

---------------------------------------------------------------------------------------------------------------------


  
