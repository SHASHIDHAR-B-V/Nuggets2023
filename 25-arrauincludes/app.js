//Array includes() - checks if the item is an array
//useful in the conditional statements

const groceries = ['milk', 'panner', 'brown Rice'];

let randomItems = ' lemon';
randomItems = 'milk';

const isIncluded = groceries.includes(randomItems, 0);
const isIncludeds = groceries.includes(randomItems, 1);
console.log(isIncluded);
console.log(isIncludeds);

if (groceries.includes(randomItems)) {
  console.log('yeah its  on list');
} else {
  console.log('no its not on list');
}
