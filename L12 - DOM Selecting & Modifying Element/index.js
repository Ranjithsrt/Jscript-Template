
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
function  changeHeading() {

setTimeout(( ) =>{

heading.textContent = 'see, i am from planet sun'; //override aagi 2s appram maarum
 // 2s delay 
}, 2000 );


}

changeHeading()

see, i am from planet sun'

-----------------------------------------------------------------------------------------------------------------------------

 getElementsByClassName  // multiple elemrnt select panna.. 

    //var name                          //particular class name
const listitems= document.getElementsByClassName ('list-item')  //selection

console.log(listitems);

output:
   
<li class= "list-item"> Hello1 </p>
<li   ''   ''         > Hiii 2</h1>   // multiple element select panna
<li    ''   ''        > Hello 3 </p>   
<li     ''    ''      > Hiii 4</h1>

---------------------------------------------------------------------------------------------------------------------
  
access particular elemrnt:

                     // 1st listname
console.log(listitems.item(0));
                           //index no
<li class= "list-item"> Hello 1</li>   
  
console.log(listitems.item(1));
<li class= "list-item"> Hiiii 2 </li> 

console.log(listitems.item(2).innerHtml);  //text mattum print aagum (value)
console.log(listitems.item(3).innerHtml);  

output

Hello 3 // value
Hiii 4

loop:

for (let i = 0; i < 4; i++) {

  console.log(listitems.item(i));

}

output
    
<li class="list-item">Item 1</li>


                     // i < 4
for ( let i = 0 ; i < listitems.length ; i++){
  
console.log(listitems.item(i).innerHTML);  
  
}

output

Hello 1 // value
Hiii 2
Hello 1 // value
Hiii 2

----------------------------------------------------------------------------------------------------------
  
for ( let i = 0 ; i < listitems.length ; i++){
                                             //0+1=1    
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
  
 
});

output

modified item 1
modified item 2
modified item 3
modified item 4

--------------------------------------------------------------------------------------------------------------------

getElementsByTagName

const contents = document.getElementById('content').getElementsByTagName('p');
console.log(contents);

//contents.item(0).style.color = 'red';

//contents.item(1).style.backgroundColor = "black";
//contents.item(1).style.color = "yellow";
//contents.item(1).style.padding = "20px";

//contents.item(2).style.fontWeight = "800";

function contentItemsStyle() {  // particular element select Panni styles apply pannum. 

contents.item(0).style.color = 'red';

contents.item(1).style.fontSize = '14px';

contents.item(2).style.fontWeight = '700';

contents.item(3).style.backgroundColor = 'pink';

contents.item(3).style.color = 'white';

}

contentItemsStyle(); //function 

---------------------------------------------------------------------------

function contentStyle() {  // multiple elementsku styles apply pannum  

for (let i = 0; i < contents.length; i++) {    //for loop

contents.item(i).style.paddingBottom = '16px';

}

}

contentStyle();

-----------------------------------------------------------------------------

Remove element from Dom:

const message = document.getElementById('message');

// message.remove();
setTimeout(() => { message.remove(); }, 3000);  //3s apram dlt agum

-------------------------------------------------------------------------------------

Adding element to DOM:
                               //method             //create tag name
const newParagraph = document.createElement('p');

// antha tagla text add panna
newParagraph.textContent = 'This is a new paragraph added dynamically.';

newParagraph.style.color = 'green';

css style:

              // method      css style name
newParagraph.classList.add('new-paragraph');
                                            //id
const container = document.getElementById('main');

---------------------------------------------------------------------------------------------------
    
appendChild(): Adds a new element as the last child of the parent element.

insertBefore(): Inserts a new element before an existing child element.

insertAdjacentHTML(): Inserts HTML content at a specified position relative to an e



container.appendChild(newParagraph); //last ah add pannum
 
                       //Newelement name             
container.insertBefore(newParagraph, heading); // heading ithukku moonadi style apply panum.
                                      // before id name

//main
container.insertAdjacentHTML('afterbegin', '<p>See Me After Main Begin</p>');

container.insertAdjacentHTML ('afterend', '<p>See Me After Main End</p>');

container.insertAdjacentHTML('beforebegin', '<p>See Me Before Main Begin</p>');

container.insertAdjacentHTML ('beforeend', '<p>See Me Before Main End</p>');



container.insertAdjacentHTML(

'beforeend",      //css style

<p style="padding-top: 20px;">See Me Before Main End</p>'

);

container.insertAdjacentHTML ('beforend', `<p style = padding-top: 100px ;">See Me Before Main Begin</p>`);


-------------------------------------------------------------------------------------------------------------
    
query Selector //ID irundhalum class ahh irundhalum select pannum

Selecting elements using querySelector (work both class on id more flexibility

      Var name                           //I'd symbol
const subTitle = document.querySelector('#subtitle');
                                        // class . Symbol
console.log(subTitle); // tags text print aagum

console.log(subTitle.textContent);  // text only



setTimeout(() => {

subTitle.textContent = "New Subtitle from JS';

}, 4000); // 4s wait pannum apram style apply pannum. 

-------------------------------------------------------------------------

querySelectorAll

Selecting multiple elements using querySelectorAll

const listItemsQuery = document.querySelectorAll('.list-item');

console.log(listItems Query);


Loop :  // node irukuradha array vaa convert panna avasiyam illai...apdiyea wrk pannalaam inga. 

listItemsQuery.forEach((item, index) => {

item.textContent = `Modified Item ${index + 2}`;

 });
--------------------------------------------------------------------------------------------------
