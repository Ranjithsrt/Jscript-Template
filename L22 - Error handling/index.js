Error handling


Error handling in JavaScript is a way to manage and respond to errors that
occur during the execution of your code. It helps ensure that your program
can handle unexpected situations gracefully and provide useful feedback
to users or developers.
  
Syntax

Syntax

try
// Code Block  // logic failure achunaa catch block pogum  
}catch(error){
// Code Block
}finally{   // code run or fail finally step run aagum..
// Code that runs no matter what  


Example :
  //cls name
class Bank {

// Array 
users = [

{ accountNo: 443301, balance: 12000, username: 'Jackie', password: '1234' },
{ accountNo: 443302, balance: 35000, username: 'Julie', password: '1234'),
{ accountNo: 443303, balance: 15000, username: 'Bheema', password: '1234'),

];
                               //parameter
getBalanceWithout ErrorHandling(accountNo) {
                //array method             // same ahh    
const result = this.users.find((x) => x.accountNo === accountNo);

console.log('Balance:${result.balance), Account Holder: ${result.username}' );

}

//guard clauses  ( fail aa na udan return pannu   Else block poga vendam  
  
//f          // input (parameters) 
getBalance (accountNo, password) {

/*
 try {   //guard clauses  ( fail aa na udan return pannu

const result = this.users.find((x) => x.accountNo === accountNo);

if (!result) {

throw `Invalid Account No ${accountNo}`;

}

const isValidPassword = result.password === password;

if (!isValidPassword) {

throw Wrong Password;

}

return Balance:${result.balance), Account Holder: ${result.username}^;

} catch (error) {

return error;

} finally {

console.log('Process is completed');

}

}

} */

  
try {

const result = this.users.find((x) => x.accountNo === accountNo); //account irukka

if (result) {

const isValidPassword = result.password === password;  // ac iruntha passw check pannu

if (isValidPassword) { // passw check

console.log(

' Balance:${result.balance), Account Holder: ${result.username}' 

; )

return 'Balance:$(result.balance), Account Holder: ${result.username);' 

} else {

throw Wrong Password";  // passw

}

} else {

throw 'Invalid Account No $(accountNo}' ;  // throw error catch block

}

} catch (error) { 

console.log(error); //Error print pannum

} finally {

console.log('Process is completed');   // always excite

}

}

}

let stateBank = new Bank();

console.log( selectBank.users);
  
stateBank.getBalance (443301, '1234');

stateBank.getBalance (443305, '1234');  Error Handling  //Error :"invaild" 
                               //12346   Wrong : passw
//let stateBank = new Bank();  // object creations 

//stateBank.getBalanceWithout ErrorHandling(443301); // Balance:12000, Account Holder:Jackie

//stateBank.getBalanceWithout ErrorHandling(443305); //Uncaught TypeError: result is undefined

                                               //Html id
const formElement = document.getElementById('formData'); //fromlaa dynamic aa result display agum  

const displayMessage = document.getElementById('displayMessage'); //id

formElement.addEventListener('submit', function (event) { //Event Handling 
  
  event.preventDefault();

const formData = new FormData(this);

const request = { accountNo: null, password: '' };

formData.forEach((value, key) {

request [key] = value; });

let indianBank = new Bank();

const response indianBank.getBalance( 
  
  Number(request.accountNo), 
  request.password );
  

displayMessage.innerHTML = response;

formElement.reset(); });
