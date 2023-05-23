// faster/easier way to access/unpack variables from arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly', ''];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

// [array] = name
const [j, b, a, l, k] = friends;

// if u rearrange or leave an array object in log it will rearrange accordingly and don't display left over

console.log(j, b, a, k);

let first = 'bob';
let second = 'shashi';
let temp = second;

second = first;
first = temp;

console.log(temp);

[second, first] = [first, second];

console.log(first, second);
