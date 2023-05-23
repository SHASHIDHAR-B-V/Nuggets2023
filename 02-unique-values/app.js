// // Unique Values
// const menu = [
//   {
//     name: 'pancakes',
//     category: 'breakfast',
//   },
//   {
//     name: 'burger',
//     category: 'lunch',
//   },
//   {
//     name: 'steak',
//     category: 'dinner',
//   },
//   {
//     name: 'bacon',
//     category: 'breakfast',
//   },
//   {
//     name: 'eggs',
//     category: 'breakfast',
//   },
//   {
//     name: 'pasta',
//     category: 'dinner',
//   },
// ];
// // const categories = ['all', ...new Set(menu.map((item) => item.category))];
// // map - get all instances
// // new Set - narrow down
// // ['all',...] - turn it back to array

// const categories = ['all', ...new Set(menu.map((item) => item.category))];
// const result = document.querySelector('.result');
// result.innerHTML = categories
//   .map((category) => {
//     return `<button>${category}</button>`;
//   })
//   .join('');

// -------------------------------------
// Unique Values
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];

//array name is menu
//spread operator turns into array
//map - get all instances
//new Set - narrow down
//['all',...] - turn it back to array

//creating a map to  use categories and new set for narrow down only unique values
//to convert to an array using spread operator

const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories);

const result = document.querySelector('.result');

result.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join('');
