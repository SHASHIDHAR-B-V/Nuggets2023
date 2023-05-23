// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = 'udemy';

const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

console.log([...boys, ...girls, bestFriend]);

//or
//reference 1
const friends = [...boys, bestFriend, ...girls];

console.log(friends);

// const newFriends = friends;
// newFriends[0] = 'shashi';
// console.log(friends);
// console.log(newFriends);

//reference2 in R2 the value of friends is not changed because v use spread operator
// copy
const newFriends = [...friends];
newFriends[0] = 'shashi';
console.log(friends);
console.log(newFriends);

//ES2018 ES8 Objects

const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, city: 'bangalore', name: 'hash' };
console.log(person);
console.log(newPerson);
