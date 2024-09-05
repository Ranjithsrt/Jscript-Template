Event Handling2:

input events:

      // var name                         input -id name
const inputName = document.getElementById("name");

                                          //input -id name
const outputName = document.getElementById("name-output");

console,log (inputName);

                         //event?   //argument 
inputName.addEventListener('input', (  ) =>{      
                                    //anomoys function                    //r
                                                                          //a
                                                                          //ra
     outputName.textContent = "Typed Name: ${ inputName.Value}"  // input ulla press pannA PANNA TIGGER aagum
                  
});

--------------------------------------------------------------------------------------------------------------------------------------------

  change event:                    // drop down menu event

      // var name                         input -id name
const  carSelect = document.getElementById("car");

       //output id                      //input -id name
const selectCar = document.getElementById(" select-car");

 

                         //event?   //argument 
carSelect.addEventListener('change', (  ) =>{      
                                    //anomoys function 
                                                                        
                                                                        
   selectCar.textContent = "select Car : ${ carSelect .Value}"  //  select panna value vaa killa kattum  (shuow)
  
                  
});

------------------------------------------------------------------------------------------------------------------------------------------------
