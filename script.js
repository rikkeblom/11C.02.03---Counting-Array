"use strict";

//this version works but I use 3 functions so let's try and see if I can stick to two like asked

// const array = [];
// let counter;
// let iteration = 0;
// //counter and array
// loop();

// function loop() {
//   iteration++;
//   array.unshift(iteration);
//   counter = array.slice(0, 9);
//   console.log(counter);

//   setTimeout(loop, 600);
// }

//this one only has 2 variables but they are both let and neither will work as a const
// let array = [];
// let counter = "";
// count();

// function count() {
//   counter++;
//   array.unshift(counter);
//   array = array.slice(0, 9);
//   console.log(array);
//   setTimeout(count, 600);
// }

//Third times the charm, this one has a const and a var and only 1 function
const array = [];
let counter = 0;
count();

function count() {
  counter++;
  array.unshift(counter);
  console.log(array.slice(0, 9));
  setTimeout(count, 600);
}
