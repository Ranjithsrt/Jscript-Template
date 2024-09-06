Encapsulation (protected ) 


    //class name
class BankAccount {

  //input 
#balance; //private field    //bank account vech access Panna mudiyaathu 

constructor (initialBalance) {
  
// ini balance set to private   
this.#balance = initialBalance;

}

  // Fn  //Input 
deposit(amount) {

if (amount > 0) {

this.#balance += amount;

console.log(Deposited ${amount). New Balance $(this.#balance}) ;

} else {

console.log(Invalid deposit amount);

} 

}

withdraw (amount) {

if (amount > 0 && amount <= this.#balance) {

this.#balance -= amount;

console.log("Withdraw ${amount). New Balance ${this.#balance));

} else {

console.log(Insufficient funds or invalid amount.");

}

}

//balance paakka indha part 
getBalance() {

return this.#balance;

}

}

let savningAccount = new BankAccount(1000);

savningAccount deposit (500);

savningAccount withdraw(200);

savningAccount withdraw(30000);

savningAccount deposit (-1000);

//saving Account. #balence 100000; Error ' private field 

console.log(savningAccount.getBalance());  // balance paaka 

Output:

Deposited 500. New Balance 154

Withdraw 200. New Balance 1200 

Insufficient funds Invalid amount.

Invalid deposit amount
