// Javascript Nuggets - Promises

//used to avoid call back hell
//write a sync code in synchronous fashion
// Promise is object that returns a value

// async await
// consume/use promises

// Pending, Rejected, FulFilled

const value = 2;

const promise = new Promise((resolve, reject) => {
  // const random = Math.floor(Math.random() * 3);
  // console.log(random);
  // if (random === value) {
  //   resolve('you guessed correctly');
  // } else {
  //   reject('erroooor');
  // }
  resolve(['hello', '1']);
  reject('error');
});
console.log(promise);

// promise;
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
