function makeUppercase(value) {
  console.log(value.toUpperCase());
}
// makeUppercase('peter');

function reverseString(value) {
  console.log(value.split('').reverse().join(''));
}

//p1
//callback function works inside a function body
function handleName(name, last, cb) {
  const fullName = `${name} smith`;
  // const lastName = `${last}`;
  cb(fullName);
  //some more logic
  //cb(lastName); //this is invoking
}

//use parameter and don't not invoke here
// handleName('peter', 'shahs', makeUppercase);
// handleName('god', 'shashi', reverseString);

//p1 end

// pass function directly

handleName('susan', '', function (value) {
  console.log(value);
});

// one liner using arrow function
handleName('susan', '', (value) => {
  console.log(value);
});

//Event Listeners

const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  console.log('hello');
});

// array methods, setTimeout , event Listener etc
