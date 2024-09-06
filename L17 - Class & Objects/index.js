Object Oriented Programming (OOPS)


// object issu: code repettition with individual objects

Class & Object (Blueprint)

HTML: 

let john {
firstname: • 'John ',
lastname: 'Doe' ,
dob: 1992,
phoneNo: 1234567890,      //object
'isEmp10yed: true,
  
getDetails: function ( ) {           //function 
  
const age  = new Date( ).getFuIIYear( )- this.dob;
  
console. log(
                                      
'${this.firstname} ${this.lastname} is ${age} old & contact no is ${this.phoneNo}' );  //calculzte to age year -age 
},
  
getEmp10yementStatus: function ( ) {
  
console. log(
'$(this.firstname) is ${this.isEmp1oyed ?'employed': 'unemployed'}

);
},

};

console.log(john);  // obj block call aagum
john. getDetai1s() ;  // getdetails functtion call agum
john. getEmp1oyementStatus( ) ;  // getemployement function call aagum

---------------------------------------------------------------------------------------------------------

class:

     //class name
class Person {
                 construor inputs
constructor(firstname, lastname, dob,phoneNo, isEmpoyrd) {
       
  
        var n
this. firstname = firstname;
this. lastname = lastname;             // value assign
this. dob = dob;
this. phoneNo = phoneNo;                /// blue print
.

this. isEmp10yed = isEmp10yed;


}
 
getDetails( ) {           //function 
  
const age  = new Date( ).getFuIIYear( )- this.dob;
  
console. log(
                                      
'${this.firstname} ${this.lastname} is ${age} years old & contact no is ${this.phoneNo}' );  //calculzte to age year -age 
},
  
getEmp10yementStatus( ) {
  [
console. log(
'${this.firstname}'${this.firstname} is ${this.isEmp1oyed ?'employed': 'unemployed'}

);
},

}; 
                             //input kudukkanum
let anni = new Person( 'Star' , ' Light ', 1997,123456789,true) ;   // obj creation or instant creation
 
anni. getDetai1s();        // f calling
anni. getEmp10yementStatus ( ) ;


  // var name
let homelander = new Person( ' Anatony'.' star ', 1997,123456789,false) ;

 homelander.getDetai1s();
 homelander.getEmp10yementStatus ( ) ; 

-------------------------------------------------------------------------------------------------------------------------------------

