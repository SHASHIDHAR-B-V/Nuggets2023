// //  Javascript Nuggets
// //  Timestamps
console.log(new Date());

// // Unix Time
// // January 1, 1970
// // 1s = 1000ms

// Date.now()
console.log(Date.now());
// new Date().getTime()
console.log(new Date().getTime());
// new Date().valueOf()
console.log(new Date().valueOf());

setTimeout(() => {
  console.log(Date.now());
}, 1000);

// // create id's in learning apps

let people = [];

people = [...people, { id: Date.now(), name: 'peter' }];

setTimeout(() => {
  people = [...people, { id: Date.now(), name: 'john' }];
  console.log(people);
}, 1000);

// create/get dates

console.log(new Date(1684816853012));
const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
console.log(futureDate);
console.log(new Date());
// // difference between dates

const firstDate = new Date();
const secondDate = new Date(2023, 07, 30);

const firstV = firstDate.getTime();
const secondV = secondDate.getTime();

console.log(firstV);
console.log(secondV);

const timeDiff = secondV - firstV;

console.log(timeDiff);
const minutes = timeDiff / (1000 * 60);
console.log(minutes);

const hours = timeDiff / (1000 * 60 * 60);
console.log(hours);
