Loops

In programming, loops are used to execute a block of code repeatedly until
a specific condition is met or for a specified number of times.
They provide a way to perform repetitive tasks efficiently without writing
the same code multiple times.

Types of Loops

1. For Loop

syntax:

for (initialization; condition; increment)  
{  
    code to be executed  
}  


Example:

  //intiallize condition increment
for ( let i=0; i<5; i++ ){    
          //  1  // i<=5;
     condition ture na mattum ulla irukka block run aagum.
            0     0<5  i+0= 0+1=1  t 
            1     1<5  i+1= 1+1=2  t
  
            4     4<5  i+1= 4+1=5  f  loop stop
            5     5<5  i+1= 5+1=6  f
       
  index start: 0,1,2,3........
    
  
  console.log('iteration'${i}')
  
}

-----------------------------------------------------------------------------------------------------
  
using let - block scoped, not accesssible outside the loop

for ( let i=0; i<5; i++ ){ 
  
  console.log('iteration'${i}')           recommended in program
  
}

console.log('iteration'${i}')  not accesssible outside the loop


usong var -function  scoped ,  accesssible outside the loop


for ( var j=0; j<5; j++ ){     
  console.log('iteration'${j}')        not recommended 
  
}

console.log('iteration'${j}')  accesssible outside the loop


--------------------------------------------------------------------------------------------------------------------

Looping Backwards:

                condition t mattum ..nxt increment block prun aagum.. apram + or - pannum
for ( let i=5; i<0; i-- ){   

            5=5,  5>0,5-1=4 f 5      
            4=5,  4>0,5-1=3 t  4
  
console.log(' reverseiteration'${i}')
  
}

 
-----------------------------------------------------------------------------------------------------------------
  
Nested Loop

for ( let x=1; x<=2; x++ ){     
  console.log('outre loop'${x}');  x=1    x=2
                                    y 1     y 1
                                     y 2    y 2
  for ( let y=1; x<=3; y++ ){        y 3    y 3
  console.log('outre loop'${y}');
  
}

console.log('iteration'${i}')  not accesssible outside the loop


---------------------------------------------------------------------------------------------------------------------

2. While Loop

  
Syntax:

while (condition)  
{  
    code to be executed  
}  
  
  
         //9 8 7
let balance=10;
    console.log(' balance  amount brfore while loop'${balance}')
      
while (balance>0){  10>0

      console.log('rs 1 is spent ,your current balance amount is${balance}')
      balance--;  //loop reverse 10,9,8,7......
       10-1=9,
        
}
  
 console.log(' balance  amount after while loop'${balance}')

         //10 20  30
while (balance<50){

       20 =  10+10
      balance+=10;   //incrent=10,20,30......
      console.log('rs 10 is spent ,your current balance amount is${balance}')
      
}

 console.log(' balance  amount after while loop'${balance}')


  -------------------------------------------------------------------------------------------------------------
  
3. Do While Loop

do{  
    code to be executed  
}while (condition);  
    

        //10
let num = 0; //condition

  do {
    console.log('number",${num}');  loop oru vatti kandippa run t f eathu irunthalum aagym.
    num++;
  } while(num <=5); t
           //10<=5  false

  
output
  0
  1
  2
  3
  4
  5
------

  number 10 // oru vatti run agum. 

------------------------------------------------------------------------------------------------------------------------

break  (stop)

for ( let i=0; i<5; i++ ){

  if (i ===3 ){
       break;  // terminates the loop when i equals 3 
}
console.log("iteration{i}");
}

  ooutput

  iteration 0
  iteration 1
  iteration 2
  
  ----------------------------------------------------------------------------------------------------------------------------------

continue  (skip)

    
debugger;  // use panni paru
  
for ( let i=0; i<5; i++ ){

  if (i ===3 ){    //3 skip pannittu appram continue  pannum
       continue;  // terminates the loop when i equals 3 
}
console.log("iteration{i}");
}

  output

  iteration 0
  iteration 1
  //3 skip pannittu appram continue  pannum
  iteration 4
  iteration 5

  
_____________________________________________________________________

Function in loops:

function greet (number) {

console.log('Hello world $(number)");

}

for (let i = 0; i <10; i++) (

greet(i);

output :

Hello world 0

Hello world 9

__________________________________________________________________
