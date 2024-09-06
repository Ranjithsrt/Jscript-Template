 
Inheritance (Parent Child)
 
 
//parent

     //class name
class Person {
                 construor inputs
constructor(firstname, lastname, dob,phoneNo, isEmpoyrd) {
       
  
       //var n
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


//child person ulladha empoyee inherit panna poooguthu

    //cls name  // inherit function
Class Employee extends person{  // ippo  parent ullla ellathiyum emp;oyee access pannum
     // child                    //parent

  
constructor(
firstname,
lastname,
dob ,
phoneNo,
isErnp10yed,
jobTit1e,
company } 

{ 

// employee ullatha  parentku anupaa
super(firstname, lastname, dob,phoneNo,isEmployed) ;  // functio ullaa pogum
              // input
  //input
this.jobTit1e = jobTit1e;
this. company = company;
  
getJobDetaiIs() {

console. log(
'${this.firstname)${this. lastname} work as a ${this.jobTit1e) at ${this. company}');
}
}


let employeel = new Employee{

'Arun',                                           //object creation
Kumar '
1990,
9876543210,
true,
"softwar developer",
"tech corp"};

 
employeel. getJobDetai1s ( ) ;
employeel. getE1oyementStatus ( ) ;  // parent ulla irukka estatus cal pannum
employeel. getDétai1s ( ) ;

//console.log( employeel.firstname); // paticular vale access panna
//console.log( employeel.lasttname);


let employee2 = new Employee{
'Ranjith ',
Kumar '
1990,
9876543210,
true,
"softwar developer",
"tech corp"};

 
employee2. getJobDetai1s ( ) ;
employee2. getE1oyementStatus ( ) ;
employee2. getDétai1s ( ) ;
