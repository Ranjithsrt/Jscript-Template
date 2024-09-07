Promise

A promise will either resolve with a value or reject with an error.

Syntax

let promise = new Promise((resolve, reject)=>{

if(true){

  resolve();

}else{

  reject();
  
}

});

let promise = new Promise((resolve, reject) => {

let data = '5';

if (typeof data === 'number') {

resolve('Success');

} else {

reject('Failed');

}

});

promise

.then((result) => {

console.log('On Resolve:${result}');

})

.catch((error) => {

console.log('On Reject:${error}');

});

-------------------------------------------------------------

function fetchData() {

return new Promise((resolve, reject) => {

console.log('Fetching data....');

setTimeout(() => {

const data = { id: 1, name: 'John Doe' };

const randomValue = Math.random();

console.log('Random Value ${randomValue}`);

const success = randomValue > 0.2;

if (success) {

resolve(data);

} else {

reject('Failed to fetch data');

}

}, 1000);

});

}

fetchData()

.then((result) => {

console.log('Data Fetched:', result);

})

.catch((error) => {

console.log('Error:', error); });


------------------------------------------------------------

let promise1 = new Promise((resolve) => {

setTimeout(() => { 
  
resolve('Promise 1 Resloved'); 

}, 2000); });

let promise2 = new Promise((resolve) => {

setTimeout(() => { 
  
  resolve('Promise 2 Resloved'); 

}, 1000); });

let promise3 = new Promise((resolve) => {

setTimeout(() => { 
  
  resolve('Promise 3 Resloved');

}, 3000);

});

promise1.then((result) => { 
  
  console.log(result); });

promise2.then((result) => { 
  
  console.log(result); });

promise3.then((result) => {
  
  console.log(result); });

-------------

Using Promise.all to call all promises together

Promise.all([promise1, promise2, promise3])

.then((result) => {

console.log('All Promise resolved', result);

})

.catch((error) => {

console.log(error);

});

-----------
  
 Using Promise.race to return as soon as the first promise completes

                //2s.       1s.       3s delay 
Promise.race ([promisel, promise2, promise3])

.then((result) => {

console.log('All Promise resolved', result);

})

.catch((error) => {

console.log(error); });
