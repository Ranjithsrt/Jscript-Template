Type Conversion (Manually)


Type conversion (also known as type casting) is when you explicitly convert a
value from one type to another. JavaScript provides several functions for this purpose.
  

Type Conversion:

console.log('Type Conversion');

---------------------------------------------------------------------------------------------------

String to Number:
            
let strNum ="123" ; //str
let num = Number(strNum);
   123  =  123    "123"


console.log(num); //123
console.log(typeof num); //number

--------------------------------------------------------------------------------------------------------------------
  
Number to String:



let num=456;
let str =String(num);
         "456"   456


console.log(num); //"459"
console.log(typeof num); //string

---------------------------------------------------------------------------------------------------------------------
  
Boolean to String:



let bool = true;
let strbool = String(bool);
              "true" true


console.log(strbool); //"true"
console.log(typeof num); //string

---------------------------------------------------------------------------------------------------------------------------------------------

String to Boolean:



let strtrue="true"; 
let strfalse="false"; //true

//let strfalse=" ";  //false  //truthy fasleshy


let booltrue = Boolean(strtrue);
let boolfalse = Boolean(strfalse);


console.log(booltrue); //true
console.log(boolfalse);  //true

---------------------------------------------------------------------------------------------------------------------------------------


Parsing integers and floats:



let floatstr = "123.456";
let intnum = parseint(floatstr);
             integer   123.456

let floatnum = parsefloat(floatstr);
                 123.456            123.456

console.log(floatnum); // no lose apdiyea print agum (flost)

output:
123.46

console.log(intnum); //456 lose last numbers

output;
123

----------------------------------------------------------------------------------------------------------------------------------------

  
Type Coercion:

Type coercion is when JavaScript automatically converts a
value from one type to another during an operation.
This often happens with equality checks and arithmetic operations. 

  

Type Coercion (Automatically)

console.log('Type Coercion');



String and Number:

let result result ="5"+2;  // (+) jscript str cconcadinate aga + ah eduthukkum.
console.log(result);

output:
   52


let result result ="5"-2;  // convert to mathematic function automatically.. 
console.log(result);


 output:
 3

let result result ="5"*2;  // convert to mathematic function automatically.. 
console.log(result);


 output:
 10

-------------------------------------------------------------------------------------------------------------------

 Boolean and Number:



             1  +  1
let result =true + 1;  
console.log(result);


 output:
 2


             0  +  1
let result =false + 1;  
console.log(result);


 output:
 1

--------------------------------------------------------------------------------------------------------------


 Coercion occurs in equality checks (==), but not in strict equality checks (===).

 Equality checks"


console.log(5=="5");  true // "5" vaa == automatic aa numberku convert panni irukku..


console.log(5==="5");  false // data type value equval ah check pannum..

console.log(5==5); true
                  0
console.log(0==false);   //true

console.log(0===false);  //false

--------------------------------------------------------------------------------------------------------------------------------




