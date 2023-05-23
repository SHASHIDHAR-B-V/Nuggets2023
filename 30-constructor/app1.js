class Employee {
  constructor(name) {
    console.log(`${name} - Employee's constructor is here`);
    this.name = name;
  }
  login() {
    console.log(`Employee has logged in`);
  }

  logout() {
    console.log(`Employee has logged out`);
  }

  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - Auto approved`);
  }
}

class Programmer extends Employee {
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`);
  }
  requestLeaves(leaves) {
    super.requestLeaves(4);
    console.log('One extra is granted');
    // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
  }
}

let e = new Employee('Employee constructor');
e.login();
e.requestLeaves(3);
console.log('------------------');
let es = new Programmer(
  'program constructor using extend and super for leaves'
);
es.login();
es.requestLeaves(3);
