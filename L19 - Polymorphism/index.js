 
  
Polymorphism (Same method in different form)
 
 
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

// Overriding the getdetails method (parent ulla irukkuratha override pannum its called polymorphism)

  
getDetai1s() {
  
const age = new Date ().gettFullYear()- this.dob;
  
console. log ( 
${this.firstname} ${this.lastname} is ${age} years old,work as a ${this.jobTit1e} at ${this.conpany});
}
  
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

 
 
employeel. getDétai1s ( ) ;

 

let employee2 = new Employee{
'Ranjith ',
Kumar '
1990,
9876543210,
true,
"softwar developer",
"tech corp"};

 
 
employee2. getDétai1s ( ) ;

------------------------------------------------------------------------------------------------------------------

 
class Student extends Person {
  
constructor(firstnne, lastname, dob, phoneNo,school, grade),{

  
super(firstnæ, lastnæ, dob, phonek), isEmployed);
this. school school;
this.grade = grade;
  
  
}

  
// Overriding the getDetails method
  
getDetai1s() {
  
const age = new Date().getFu11Year()- this .dob;
  
 console. log(
   
'${this.firstname)${this. lastname} is  ${age)  grade ${this. grade} is  ${this. school} ');
  
}
}


let student = new Student(
' Lakshmi ',
' Priya',
1995,
8765432109,
true,
'Sunrise School',
"10th"
);

student. getDetai1s() ;


------------------------------------------------------------------------------------------------------------------
 
