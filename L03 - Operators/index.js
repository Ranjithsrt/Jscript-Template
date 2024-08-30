Operators:

--------------------------------------------------------------------------------------------

Types:

1.Arithmetic Operators
2.Assignment Operators
3.Comparison Operators
4.Logical Operators
5.String Operators

--------------------------------------------------------------------------------------------------

1.Arithmetic Operators - Arithmetic operators are used to perform basic mathematical operations

1.1)Addition (+)

console.log( "Arithmetic operators");

let sum = 5 + 3; //8

console.log( "Addittion" , sum);

----------------------------------------------------------------------------------------------

  
1.2)Subtraction (-)
 
let sum = 10 - 2;  //8

console.log( "subtraction" , sum);

---------------------------------------------------------------------------------------------

1.3)Multiplication (*)

let sum = 2 * 3; //6

console.log( "mul" , sum);

-----------------------------------------------------------------------------------------------

1.4)Division (/)

 let sum = 12 / 2; //6

console.log( "div" , sum);   

----------------------------------------------------------------------------------------------

1.5)Modulus (%)

let sum = 10 % 3;  //reminder

console.log( "modu" , sum);

-----------------------------------------------------------------------------------------------

1.6)Exponentiation (**)

let sum = 2 ** 3; //pow 2x2x2=8

console.log( "mul" , sum);

===============================================================================================

1.7)Increment (++)

let sum = 10;
10++;  // post increment 10+1=11
++a; // pre increment 11
console.log(sum);

var a=10; //10
var b=a++; //10
console.log( b); //10
console.log(a); // a meendum a vaa paakum pothu 11 maarum


var a=10; //10
var b=++a; //11 meendum ore a paakaa thevai illai
console.log( b); //11
console.log(a); // 11

--------------------------------------------------------------------------------------------------

1.8)Decrement (--)

let sum = 10;
10--;  //10-1=9
--10; //9
console.log(sum);


var a=10; //10
var b=a--; //9
console.log( b); //10
console.log( a); // a meendum a vaa paakum pothu 9 maarum

var a=10; //10
var b=--a; //9 meendum ore a paakaa thevai illai
console.log( b); //9
console.log(a); // 9

----------------------------------------------------------------------------------------------------

2.Assignment Operators - Assignment operators are used to assign values to variables.

  
2.1)Assignment (=)

let num =10;

console.log( num);

---------------------------------------------------------------------------------------------------

2.2)Addition Assignment (+=)

let num =10;
num+=5; // num=10+5

console.log( num);  //15

---------------------------------------------------------------------------------------------------

2.3)Subtraction Assignmen t (-=):


let num =10;
num-=5; //num=10-5

console.log( num);  //5

----------------------------------------------------------------------------------------------------------

2.4)Multiplication Assignment (*=):


let num =10;
num*=5;

console.log( num);  //50

--------------------------------------------------------------------------------------------------------

2.5)Division Assignment (/=):

let num =10;
num/=2;

console.log( num);  //5

------------------------------------------------------------------------------------------------------------------

2.6)Modulus Assignment (%=):

let num =10;
num%=3;

console.log( num);  //1

----------------------------------------------------------------------------------------------------------

2.7)Exponentiation Assignment (**=)

let num =2;
num**=3;

console.log( num);  //8

----------------------------------------------------------------------------------------------

3.Comparison Operators - Comparison operators are used to compare two values.

3.1)Equal (==) 

console.log( 5==5);  //true

Type coercion:

console.log( 5=="5");  //1st enna type paakum apram aathuve convert pnnikkum  //true

3.2)Strict Equal (===)

Noo type coercion

console.log( 5==='5');  // irendu ore value  vaa ore type ah check pannum?.. // false

3.4)Not Equal (!=)

console.log( 5!='5');  // irendum same aga orukka koodaathu.. true

console.log( 4!=5);  //true

3.5)Strict Not Equal (!==)

console.log( 5!==5);  // no type coercion true

console.log( 5!=='5');   //false

3.6)Greater Than (>)

console.log( 10>5);  // true

3.7)Less Than (<)

console.log( 10<5);  //false

3.8)Greater Than or Equal (>=)

console.log( 11>=10); //true

console.log( 10>=10); //true

console.log( 7>=10);  //false


3.9)Less Than or Equal (<=)

console.log( 5<=10);  //true

console.log( 10<=10);  //true

console.log(11<=10);  //false

-----------------------------------------------------------------------------------------------------

4.Logical Operators - Logical operators are used to combine multiple conditions.

4.1)Logical AND (&&)

console.log( true && false);  //f
console.log( false && true);  //f
console.log( true && true);  //t
console.log( false && false);  //f


4.2)Logical OR (||)

console.log( true || false);  //t
console.log( false || true);  //t
console.log( true || true);  //t
console.log( false || false);  //f
 
  

4.3)Logical NOT (!)

console.log( !true);  //f
console.log(!false );  //t
 

//Example

let haveidproof=false;
let isAdult=true;
       False         true
if(haveidproof &&  isAdult){

    console.log( "allowed" );   
}
else{

 console.log( "not  allowed"); 
  
}

Output : not allowed 
-------------------------------------------------------------------------------------------------

String Operators

String concatenation:

console.log( "Hello World.! ");

console.log( "HI" +' '+" HELLO");  

String with Different Quotes:

console.log( " I AM 'HERO' ");  

console.log( ' I AM "HERO" ');  

console.log( " I \'M 'HERO' "); 

Concatenation with Object Properties:

let person={
id:1,
name:"ranjith",  
}

console.log( " wlcome"+ name+ "yourid " + id);  

________________________________________________________

Template literal

console.log ("welcome ${name} your ID ${id} " ) ;

Order Prcedence:

console.log( 2 + 4 * 3 );  //4 * 3 = 12 + 2 = 14

console.log ((2 + 4) + 3);  // 2 + 4 = 6  * 3 = 18

______________________________________________________________

New Examples with and

console.log (10 - 2/2) ;   // 2/2 = 1, then 10 - 1 = 9
console.log((10-2) / 2);   // 10-2=8, then 8/2  = 4

________________________________________________________________

Additional Combined Example

console.log((8/2)(2 + 2));   //2+2+4, 8/2 = 4, then 4* 4 =16
 
