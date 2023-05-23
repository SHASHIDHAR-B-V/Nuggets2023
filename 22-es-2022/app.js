// //  Javascript Nuggets
// //  ECMAScript 2022
// // at() - takes integer and returns the item at that index - string,array

// Top Level Await - Basic Example

//fetching using Import from fetchtabs

import fetchTabs from './fetchTabs.js';
const tabs = await fetchTabs();
console.log(tabs);

const scores = [54, 45, 55, 56];

const lastNum = scores[scores.length - 1];
console.log(lastNum);

const newLast = scores.at(-1);
console.log(newLast);

const channel = 'coding';
console.log(channel.at(-1));
console.log(channel.at(-0));

// //fetch data here ny using type module in HTMl for script
const fetchData = async () => {
  const resp = await fetch('https://www.course-api.com/react-tabs-project');
  const data = await resp.json();
  console.log(data);
};

fetchData();

//-------------------------------

//we can fetch like below because we are using module

const resp = await fetch('https://www.course-api.com/react-tabs-project');
const data = await resp.json();
console.log(data);

//----------------------------------------------------
