// function Person (name, age) {
//   this.name = name;
//   this.age = age;
// }
// let daeho = new Person('대호', 25);

class Person {
  // Class logic
  // constructor : 초기화 메서드
  constructor(name, age) {
    console.log('is created.')
    this.name = name;
    this.age = age;
  }
}

// new class()시 class 내부 로직이 작동함.
let seho = new Person('세호', 30); // is created.
console.log('seho >>', seho)

