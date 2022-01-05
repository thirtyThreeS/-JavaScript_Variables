console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = `Thomas`;
let lastName = 'Sixberry';
var age = 33;
// Exercise 2
let fullName = firstName + " " + lastName;
console.log(fullName);
console.log(`This is a template literal: ${fullName}`);
// Exercise 3
// City & Passtime Vars need declared.
var city = "Mount Pleasant";
var passtime = "trading crypto and stocks but most importantly I love learning new languages whether programming or in the real world";
let myStory = `Hello, my name is ${fullName}. I am currently residing in ${city}, Michigan. I enjoy ${passtime}.`;
console.log(myStory);