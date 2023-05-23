// faster/easier way to access/unpack values from arrays

const bob = {
  first: 'shashi',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
    brother: 'mav',
  },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
// const brother = bob.siblings.brother;

// console.log(firstName, lastName, sister, brother);

// --------------------------------------

//Using another way

//alias
const last = 'some-value';

const {
  first,
  last: some,
  siblings,
  siblings: { brother: favoriteSibling },
  city,
  dog,
} = bob;

console.log(first, some, city, dog, siblings.sister, last, favoriteSibling);

//----------------
function printPerson(person) {
  // console.log(person.first);
  const { first, last } = person;
  console.log(first, last);
}

//or

function printPerson1({ first, last, city, siblings: { sister } }) {
  // console.log(person.first);
  console.log(first, last, sister);
}

printPerson(bob);
printPerson1(bob);
