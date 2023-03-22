import React from 'react';


fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(data => console.log(data));

const resp = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await resp.json();
console.log(data);