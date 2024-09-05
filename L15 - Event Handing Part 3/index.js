Event Handling 3

form Event:

      // var name                             form -id name
const feedbackForm = document.getElementById("feedbackForm");

                                                                   // select two element's 
       //another id                         //div -id name
const  responseDiv = document.getElementById("response ");


console,log (feedbackForm);

                              //event?             //argument 
feedbackForm.addEventListener('subnit', ( functin ( event ) =>{      
                                         //anomoys function                  
          //trigger event                                                                
 event.preventDefault  (); // input ulla press pannA PANNA TIGGER aagum

  feedbackForm.addEventListner("submit",  function ( event)){

    event.preeventDefault();

    const formData = new FormData(this);

    console.log('formDats');    // ithu vara key value pair aa kaatum

    const formDataJson ={};         //json format converting

    formData.forEach((value,key ) => {

          formDataJson[ key ] = value;   // object formatt aa show aagum.
  
});

    console.log('formDataJson ');  

    const jsonString = JSON.stringif ( formDataJson, null ,2);  

    responseDiv.innerHTML = "<pre> $ { jsonString  } </pre>";   // ui laa string aa display aagum

    feedbackForm.rest();   // rest event

  });
                               
