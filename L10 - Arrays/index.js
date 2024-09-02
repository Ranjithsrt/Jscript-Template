
An array is a data structure that can hold multiple values at once. 
These values can be of any type, including numbers, strings, objects, or even other arrays.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.


syntax:

            index 0      1      2
let ArrayName =[item1, item2, item3];

-------------------------------------------------------------------------------------------------
  
Using square brackets

let fruits = ["apple","cherry"."banana"];

console.log(fruits);

output:

[apple","cherry"."banana"]

-------------------------------------------------------------------------------------------------

Accessing Array Elements:

console.log(fruitsh[0]);  //apple
console.log(fruitsh[1]);  // cherry
console.log(fruitsh[2]);  // banana
console.log(fruitsh[3]);   // undifined

-------------------------------------------------------------------------------------------------

Change Value in Array

fruits[1]='orange';  //replace
console.log(fruits);

output:
        //orange
["apple","cherry"."banana"]

        //indx 1
["apple","orange"."banana"]


-------------------------------------------------------------------------------------------------
        
Using for loop to print array with hard-coded condition it will create issue if condition is like i < 5

debugger;

for (let i =0; i<3; i++){
  console.log(fruits[i]);
}

output:

apple
orange 
cherry

-----------------------------------------------------------------------------------------------

To avoid hard-coded condition switch to array methods

 We can use array length

//console.log(fruits.length); 3

for (let i =0; fruits< length; i++){
  console.log(fruits[i]);
}

----------------------------------------------------------------------------------------------

  
More Array Methods


let box =["books",'toys'.'pen'];
console.log(box);

----------------------------------------------------------------------------------------------------

Add element to array

Adds one or more elements to the end of an array 
and returns the new length of the array.

box.push("diary");  endlaa store agum
console.log(box);

output:
["books",'toys'.'pen'.diary];

----------------------------------------------------------------------------------------------------
  
Remove element from array
Removes the last element from an array and returns that element.

box.pop( );  endlaa remove agum
console.log(box);

output:

["books",'toys'.'pen'.diary];
["books",'toys'.'pen'];

-----------------------------------------------------------------------------------------------------

Adds one or more elements to the beginning of an array and returns the new length of the array.

box.unshift("map");  1stlaa store agum
console.log(box);

output:
["map","books",'toys'.'pen'.diary];

--------------------------------------------------------------------------------------------------------------
  
Removes the first element from an array and returns that element.

box.shift("map");  1stlaa remove agum
console.log(box);
console.log(box);

output:
["map","books",'toys'.'pen'.diary];
["books",'toys'.'pen'];
['toys'.'pen']

----------------------------------------------------------------------------------------------------------------

Anonymous Functions

    //itreation
box.forEach(function(x)){         // arraylaa ulla default loops methed ithu
  console.log(x);                  // var name illa call pannalaa but run agum
}

output 

["books",'toys'.'pen'];

shorthand


box.forEach((x)) =>{        
  console.log(x);                  
}

output 

["books",'toys'.'pen'];

---------------------------------------------------------------------------------------------------------------
  
Combining Arrays

let containerOne =["tv"."laptop"];
let containerTwo =["watch"."phone"];

console.log(containerOne);
console.log(containerTwo);

let container = containerOne.concat(containerTwo);
console.log(container);


output:

let container =["tv"."laptop","watch"."phone"];

-------------------------------------------------------------------------------------------------------------------
  
 Finding an Element Index, If not found it will return -1

                                //jghfy
let index = container. indexof("laptop");    //illadha value kuduthal output -1 vaarum.

console.log(index);  //1  index  value eduthuttu vaarum

----------------------------------------------------------------------------------------------------------------------

Array with mixed data types

let mixedData =[10,3.45, "STR,",true,false,null,nan,undefined];
console.log(miedData);

                      // array ulla indha value irukka illayaa...check pannum
let result - mixdata.includes("STR");     //true  
console.log(result);

shorthand:

console.log(miedData.includes(48)); //false
                               //null  true
output:

true

-------------------------------------------------------------------------------------------------------------------------
  
 Array of Employee Objects

let employees =[

  { id: 1, name:"john", age:30},
  { id: 2, name:"jack", age:30},
  
];

console.log(employees);

loop in array

employee .forEach ((employee) =>{

console.log("Employee id: ${employee.id}");
console.log("Employee name: ${employee.name}");
console.log("Employee age: ${employee.age}");

  
  output

  employee  id:1
  employee  name:john
      "      age: 40
 ----------------------------------------------------------------------------------------------------------------------- 

Fliters
  
      //variable        //array name          // array id
  let employee  =employees.find(x) => x.id ===2);  //paticular iteam ah access pannraathukku
  console.log(employee);                              // 2 vaa irundha  veliya edukkum

  output:

    { id: 2, name:"jack", age:10},
                                     // age 30 filter pannu
  let x =employees.filter(x) => x.age>30);    //particulare raa onna select panni print seiyaa (age)
  console.log(x); 

output:

 { id: 1, name:"john", age:30},
  { id: 2, name:"jack", age:30},

----------------------------------------------------------------------------------------------------------------------------

Map           //loop marri  data manipulate pannalaam

let y = employee.map((employee) =>{                                     // age vechu dob kanndu pudikkum
    console.log("name:${employee.name},dob:${new date().getFullYear() - employee.age}); 
});

output:

name: john ,dob:1994
name: jack ,dob:1996

-----------------------------------------------------------------------------------------------------------------------------------
