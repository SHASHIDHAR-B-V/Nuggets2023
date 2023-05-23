//dot notation
const person1 = {
  names: 'johns',
};

console.log(person1.name);
person1.age = 25;
console.log(person1);

//square bracket notation

//when u return an object of array use square brackets
const items = {
  'featured-items': ['item1', 'item2'],
};

console.log(items['featured-items']);

//you can also use it for just objects
console.log(person1['names']);

// Example 2

let appState = 'loading';

//assigning variable again
appState = 'error';

const app = {
  [appState]: true,
};

//keys
const keyName = 'locks';

//assigning new object to app
//values
app[keyName] = 'keys';

console.log(app);

//------------------

//state is na objects

const state = {
  loading: true,
  name: '',
  job: '',
  hobby: '',
};

//function with params key and value
function updateState(key, value) {
  state[key] = value;
}

//argumnets
updateState('name', 'shashi');
updateState('job', 'web-dev');
updateState('hobby', 'web-dev');

console.log(state);
