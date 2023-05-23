//Camel Notation oneTwoThree
// Pascal NOtation  OneTwoThree

//Factory Function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    },
  };
}

//creating an object
const myCircle = createCircle(1);
console.log(myCircle);

//Construction Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

//creating an object
const circle = new Circle(1);
console.log(circle);

const circle2 = new Circle(2);
console.log(circle2);
