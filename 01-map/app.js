// MAP Method
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 26,
    position: 'intern',
  },
];
// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

//syntax for map
//  var varname = array.map((anynewname)) => {
// return(anynewname.arrayobjectskey)
// }

// const ages = people.map((person) => {
//   console.log(person);
//   return person.age;
//   //or
//   // return person.age * 2;
// });
// console.log(ages);

//can create a variable and add arrow function to it and use that into another variable to use map

//one liner

// const agees = people.map((person) => person.age);
// console.log(agees);

//creating a newPeople from people and changing name to upperClass and age + 20
// const newPeople = people.map((persons) => {
//   return {
//     firstName: persons.name.toUpperCase(),
//     ages: persons.age + 20,
//   };
// });

// console.log(newPeople);

//-----------------------

//create a var that selects names from array and push it as h2 using inner html
const heading = people.map((person1) => `<h2>${person1.name}</h2>`);

const result2 = document.querySelector('#result');

result2.innerHTML = heading.join('');
