
Document Object Model (DOM) manipulation

imagine you have a physical bulletin board where you can pin up notes.
you can add new notes, remove old ones , or update existing notes on the boaed.
similarly in a web page you can use jscrtpt to manipulate the Dom ( Document object model)
to add ,remove or change element's one the page.

The following the way to Selecting & Modifying Element in DOM :

1.getElementById
2.getElementsByClassName
3.getElementsByTagName
4.querySelector
5.querySelectorAll

-----------------------------------------------------------------------------------------------------------

getElementById :   //browsers - right click -inspect

select a single element on it is unique id attribute.

    //var name                          //particular id name
const heading = document.getElementById ('main-heading')  //selection

console.log(heading);

----------------------------------------------------------------------------------------------------------

finding value:

console.log(heading.innerHtml);  // outputs the html content's inside the element 

output:

let's play with Javascript   //ulla irukka content ella eduttuttu vaarum
<p> Hello </p>   
<h1> Hiii </h1>

console.log(heading.textConent);  //  outputs the text content's inside the element 

output:

let's play with Javascript  //text mattm  eaduthuttu vaarum.  // 1 mattum thookittu vaarum
Hello

----------------------------------------------------------------------------------------------------------------------------------  

changing  value :

heading.innerHtml = 'see, i am from planet earth'; //override aagum

heading.textContent = 'see, i am from planet mars'; //override aagum  //2nd option

function:


          // f name
function  chageHeading() {

setTimeout(( ) =>{

heading.innerHtml = 'see, i am from planet sun'; //override aagi 2s appram maarum
 // 2s delay 
} . 2000 );


}

 chageHeading()

see, i am from planet sun'

-----------------------------------------------------------------------------------------------------------------------------

 getElementsByClassName  // multiple elemrnt select panna.. 

    //var name                          //particular class name
const listitems= document.getElementByClassName ('list-item')  //election

console.log(list-items);

output:
   
<li class= "list-item"> Hello1 </p>
<li   ''   ''         > Hiii 2</h1>   // multiple element select panna
<li    ''   ''        > Hello 3 </p>   
<li     ''    ''      > Hiii 4</h1>

---------------------------------------------------------------------------------------------------------------------
  
access particular elemrnt:

console.log(listitems.item(0));
<li class= "list-item"> Hello 1</li>   
  
console.log(listitems.item(1));
<li class= "list-item"> Hiiii 2 </li> 

console.log(listitems.item(1).innerHtml);  //text mattum print aagum (value)
console.log(listitems.item(2).innerHtml);  

output

Hello 1 // value
Hiii 2

loop:

for ( let i = 0 ; i < listItems.length ; i++){
  
console.log(listitems.item(i).innerHTML);  
  
}

output

Hello 1 // value
Hiii 2
Hello 1 // value
Hiii 2

----------------------------------------------------------------------------------------------------------
  
for ( let i = 0 ; i < listItems.length ; i++){
  
listitems.item(i).innerHTML = 'modified item ${i+1}';  
  
}

<li class= "list-item"> Hello1 </p> // hello1 ippo modified item 1 aagm.
  
modified item 1
modified item 2
modified item 3
modified item 4

----------------------------------------------------------------------------------------------------------

convert to array

       var n            type conversion
const itemsArray = Array.from(listItems);
  
itemsArray.forEach((item) =>{

console.log(item.textContent);  
  
));


output

modified item 1
modified item 2
modified item 3
modified item 4

--------------------------------------------------------------------------------------------------------------------
