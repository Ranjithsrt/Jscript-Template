
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

Object with method

let car ={

  brand:"toyota";
  model:"camry;
  year=2026;
  displayinfo:function(){
               //(this) obj kuulla irukka year eaduthukko
    return '${this.year} ${this.brand} ${this.model};
  }

};

//console.log(car);
console.log(car.displayinf());

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

shorthand: (desturucturing)

let {name ,age,isemployed} = person;   //mela irukka obj key value inga set agum

console.log(name);
console.log(age);


Nested Complex Objects

let resturent ={

  name:"idli",
  loc : "chennai";


  owner :{
             name : "Ranjith",
              age : 21,


                contact:{
                   email: viratzzz@12.
                   ph:"27839699",
  };
             };

      menu:[


          { dish: "masala dosa",price:30,spicy:true},
          { dish: "coffee",price:100,spicy:false},
          { dish: "pongal",price:45:,spicy:false},


           ];
  
};

console.log(restaurant);

-----------------------------------------------------------------------------------------------------------------


Accessing properties of the nested objects

console.log("welcome to ${restaurant.name} in ${restaurant.loc}");
console.log("welcome to ${restaurant.owner.name} in ${restaurant.owner.loc}");
console.log("welcome to ${restaurant.owner.contact.email in ${restaurant.contact.ph}");

restaurant.menu,forEach((item) =>{
  
  console.log(" ${iteam.dish}: rs. ${item.price}") (${item.spicy? "spicy":"not"});  // not spicy


});

---------------------------------------------------------------------------------------------------------------------------------

Destructure owner object

let { name:ownername,age:ownerage,contact:{ email: owneremail,phone: ownerphone} ,} =restaurant.owner;

 Output details about the restaurant

console.log("owned by  ${ownername} ,age ${ownerage}");
console.log(" contact ${ownereamul} in ${ownerphone}");


 Output the menu items using destructuring within forEach

restaurant.menu,forEach(( dish,price,spicy) =>{
  
  console.log(" ${dish}: rs. ${price}") (${spicy? "spicy":"not"});  // not spicy
});

-----------------------------------------------------------------------------------------------------------------------------
