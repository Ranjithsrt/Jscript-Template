  //Obj name
let person = {

  key     value
 name : "Ranjith",
 age : 21,
 isEmployed: true, 
  
};

console.log(person);
console.log(person.name);
console.log(person.age);

--------------------------------------------------------------------------------------------------
  
Adding a new property

person.city ="newyork";  //add
console.log(person);

----------------------------------------------------------------------------------------------------
  
Modifying an existing property

person.age =30;  //update
console.log(person);


-------------------------------------------------------------------------------------------------------]]

  let car ={

  brand:"toyota",
  model:"camry",
  year: 2026,

 //functionname
  displayinfo:function(){
               //(this) obj kuulla irukka year eaduthukko
    return `${this.year} ${this.brand} ${this.model}`;
  }

};

 
//console.log(car);
console.log(car.displayinfo());

output:

2026 toyota  camry
 // brand:"toyota";
  //model:"camry;
  //year=2026;

----------------------------------------------------------------------------------------------------------

Destructuring assignment

let person = {

  key     value
 name : "Ranjith",
 age : 21,
 isEmployed: true, 
  
};

shorthand: (Destructuring )

let {name ,age,isEmployed} = person;   //mela irukka obj key value intha variablesku set agum

console.log(name);
console.log(age);
console.log(isEmployed);

Output :

Ranjith 
21
true

--------—-----------------------------------------------------

Nested Complex Objects

     //obj name
let restaurant = {  //obj 1
  

name: "Idli Delights",

location: "Chennai" ,

owner: {              // Obj 2

name: 'Rajini Kumar',

age: 50,

contact: {        //  obj 3

   email: 'rajinikumar@sapadusapadu@gmail.com',
   phone: '555-123-4567',
  
 };
  
};

menu: [   //Array

{dish: "Masala Dosa, price: 50, spicy: true } ,

{dish: 'Filter Coffee', price: 30, spicy: false },       //obj 4
 
{dish: 'Pongal', price: 45, spicy: false} ,


], 
} ;


console.log(restaurant);

-----------------------------------------------------------------------------------------------------------------

Accessing properties of the nested objects


console.log('Welcome to ${restaurant.name} in ${restaurant.location}`);

console.log(Owned by ${restaurant.owner.name}, age ${restaurant.owner.age}');

console.log(

Contact: ${restaurant.owner.contact.email), ${restaurant.owner.contact.phone}

);
           
                 //Array
restaurant.menu.forEach((item) => {

console.log(  
                                            // tarinary operator 
`${item.dish): Rs.${item.price) (${item.spicy? 'Spicy': 'Not Spicy'))

);

});


---------------—-------------------------------------------------------------------                             
                                   
Destructure owner object

let {

name: ownerName,

age: ownerAge,

contact: { email: ownerEmail, phone: ownerPhone }, } = restaurant.owner;

---------------------------------------------------------------------------------------

Output details about the restaurant
      
console.log(Owned by ${ownerName), age ${ownerAge}`); 

console.log('Contact: ${ownerEmail), $(ownerPhone)`);

-----------------------------------------------------------------------------------

Output the menu items using destructuring within forEach

restaurant.menu.forEach(({ dish, price, spicy }) => {

console.log(${dish): Rs.${price) (${spicy? 'Spicy': 'Not Spicy'})`); }); 

--------------------------------------------------------------------—---------------------

