//inheritance and extend keyword

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    console.log(this.name + ' is running!');
  }
  shout() {
    console.log(this.name + ' is barking!');
    console.log('bruno is ' + this.color);
  }
}

class Monkey extends Animal {
  eatBanana() {
    console.log(this.name + ' is eating banana');
  }
  hide() {
    console.log(`${this.name} is hiding`);
  }
}

let ani = new Animal('Bruno', 'white');
let m = new Monkey('Chimp', 'orange');

ani.shout();
m.eatBanana();
m.hide();
//ani.hide(); //ani is animal constructor so it will not work in child constructor

console.log(ani);
console.log(m);
