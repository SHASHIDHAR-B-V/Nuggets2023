// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, s, ...restOfFruits] = fruits;
console.log(first, s, restOfFruits);

const specificFruit = restOfFruits.find((fruit) => fruit === 'lemon');
console.log(specificFruit);

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...rest } = person;

console.log(job, rest);

// functions

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};

// getAverage(person.name,67,45,55,51,54)

const testscores = [88, 77, 66, 99, 99];
getAverage(person.name, ...testscores);
//-------------------------------------
