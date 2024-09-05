Event Handling 4

window Event :

window.addEventListner ("resize", ( ) =>{

  const dimensions = " window dimensions: ${window.innerWidth}px x ${window.innerHeihjt}px';
  document.getElementById (" dimensions").textContent = dimensions ;
  
});

---------------------------------------------------------------------------------------------------------------

  
window.addEventListner("load", ( ) =>{

     console.log('window loaded');  
});                    

--------------------------------------------------------------------------------------------------

window.addEventListner("scroll", ( ) =>{

     console.log('window scrolled');  
});                    

----------------------------------------------------------------------------------------------------------
