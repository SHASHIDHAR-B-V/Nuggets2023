//setObject- stores a collection of unique values of any type
//new Set()
//add(value)
//delete(value)
//clear()
//has(value)

//iterators
//entries(),keys(),values() , forEach()

const unique = new Set();
console.log(unique);

const random = 'third';

//add
unique.add('first');
unique.add('second');
unique.add(random);
unique.add(4);
unique.add(6);

//delete
const resultss = unique.delete('third');
console.log(resultss);

const result = unique.delete('five');
console.log(result);

//clear
const clear = unique.clear();

//adding again
unique.add('first');
unique.add('second');

//checking using has
const isValue = unique.has('first');
console.log(isValue);

console.log(unique);

//new Set() - accepts iterable objects

//Array
const products = [
  {
    title: 'h1',
    company: 'ink',
  },
  {
    title: 'h2',
    company: 'ikea',
  },
  {
    title: 'h3',
    company: 'ink',
  },
  {
    title: 'h4',
    company: 'inward',
  },
];

//using map
const company = products.map((product) => {
  return product.company;
});

console.log(company);

const uniqueCompanies = new Set(company);

console.log(uniqueCompanies);

const finalCompanies = [...uniqueCompanies];
console.log(finalCompanies);

//---------- or  using  one liner

const results = ['all', ...new Set(products.map((item) => item.company))];
console.log(results);
