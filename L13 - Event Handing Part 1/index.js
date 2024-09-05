Event Handling :

Html:

const button = document.getElementBtid("button");  //select id
console.log(button);

output:

<button id="button">  <button>

-----------------------------------------------------------------------------------------------

                        //event?
button.addEventListener('click', ( ) =>{      //add event
                               //anomoys function 
  
   // console.log('button clicked');             

   alert('button clicked');    //pop up
  
});
                       
----------------------------------------------------------------------------------------------

                          //event?
button.addEventListener('mouseover', ( ) =>{      //add  hover event
                          //mouse
  
  button.classList.add("buttonHover");            // styles  implement to jscript
                        // css style name
});

-----------------------------------------------------------------------------------------------------

                           // event?
  button.addEventListener('mouseout', ( ) =>{      //remove hover event

      button.classList.remove("buttonHover");
                            // css style name
});

--------------------------------------------------------------------------------------------------------

                          //event?     //argument 
document.addEventListener('keydown', ( event ) =>{      //keyboard event    // key press panna displaylaa show aagum.
        
                      // enter key (key board)
       if (event.key === 'Enter'){       // enter aluthum poothu
       
       alert('Enter Key is Pressed!');    // display pop up on window
  
});

----------------------------------------------------------------------------------------------------------------------

                            //event?     //argument 
document.addEventListener('keypress', ( event ) =>{      //keyboard event    // key press panna displaylaa show aagum.
        
                      // enter key (key board)
       if (event.key === 'Enter'){              // enter aluthunaathi mudichi apram trigger agum
       
       alert('Enter Key is Pressed!');    // display pop up on window
  
});

------------------------------------------------------------------------------------------------------------------------------------

                          //event?     //argument 
document.addEventListener('keyup', ( event ) =>{      //keyboard event    // key press panna displaylaa show aagum.
        
                      // enter key (key board)
       if (event.key === 'Enter'){                     //key aluthittu release pannni mela vaarumpothu show aaum
       
       alert('Enter Key is Pressed!');    // display pop up on window
  
});

---------------------------------------------------------------------------------------------------------------------------------

                            //event?     //argument 
document.addEventListener('keydown', ( event ) =>{      //keyboard event    // key press panna displaylaa show aagum.
        
                      // enter key (key board)
       if (event.shiftkey){               // shift key pressed
       
       alert('shift Key is Pressed!');    // display pop up on window
  
});


-------------------------------------------------------------------------------------------------------------------

                          //event?     //argument 
document.addEventListener('keydown', ( event ) =>{      //keyboard event    // key press panna displaylaa show aagum.
                                      //anomoys function 

  
                      // enter key (key board)
       if (event.ctrlkey){               // shift key pressed
       
       alert('ctrl Key is Pressed!');    // display pop up on window
  
});

---------------------------------------------------------------------------------------------------------------------------------------------

                              //event?     //argument 
//document.addEventListener('keydown', ( event ) =>{      //keyboard event    // key press panna displaylaa show aagum.
        
                      
       if (event.key => 'a' && event.key <= 'z'){               //  enter alphabets key pressed
       
       alert('alphabets Key ' ${ event.key}' pressed!');    // display pop up on window
  
});

---------------------------------------------------------------------------------------------------------------------------------------------------------------
  
                      
       if (event.key => '0' && event.key <= '9'){               //  enter number key pressed
       
       alert('alphabets Key ' ${ event.key}' pressed!');    // display pop up on window
  
});
---------------------------------------------------------------------------------------------------------------------------------
