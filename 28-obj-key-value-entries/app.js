//Three Methods to convert objects into arrays
//Objects.keys()- convert property names into array
//Object.value() - convert property values into array
//Object.entries() - convert both

const person = {
  name: 'john',
  age: 25,
  status: 'student',
};

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entry = Object.entries(person);
console.log(entry);

//map method

const newResult = entry.map((item) => {
  console.log(item);
  const [first, second] = item;
  console.log(first, second);
  return first;
});

console.log(newResult);

//for of loop

for (const [first, second] of entry) {
  // const [first, second] = item;
  console.log(first, second);
}

//for in loop
for (const propertyName in person) {
  console.log(`${propertyName} : ${person[propertyName]}`);
}
