Browser Storage

1. Local Storage

LocalStorage allows you to store data in the browser with no expiration time. The data persists even after the browser is closed and reopened.

2. Session Storage

SessionStorage stores data for the duration of the page session. Data is cleared when the page session ends (i.e., when the page is closed).


localStorage.setItem('username', 'JohnDoe');

localStorage.setItem('username', 'Jane Doe');

 const usernameOne = localStorage.getItem('username2');

 console.log(usernameOne);

localStorage.removeItem('username1');

 localStorage.clear();

sessionStorage.setItem('day', 'white');

sessionStorage.setItem('night', 'black');

const theme = sessionStorage.getItem('day');

 console.log(theme);

sessionStorage.removeItem('day');

sessionStorage.clear();

------------------
  
const user = {

id: 1,

name: 'Jane Doe

age: 30,

};

localStorage.setItem('user', JSON.stringify(user));

nst 1sUser = JSON.parse(localStorage.getItem('user')); 

console.log(1sUser);
