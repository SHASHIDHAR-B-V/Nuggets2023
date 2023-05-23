//string includes() - checks if a string contains another

const products = [
  { title: 'first' },
  { title: 'first-sec' },
  { title: 'first-third' },
  { title: 'first-four' },
];

const text = 'e';
// const text = 'r';
// const text = 'w';

const filteredProducts = products.filter((product) => {
  return product.title.toLowerCase().includes(text);
});

console.log(filteredProducts);

const firstName = 'john';
const results = firstName.includes('j', 0);
console.log(results);

const product = {
  title: 'first-five',
};
const result = product.title.includes('');
console.log(result);
