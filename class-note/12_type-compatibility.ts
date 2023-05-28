interface IDeveloper {
  name: string;
  skill: string;
}
interface IPerson {
  name: string;
}

let developer: IDeveloper;
let person: IPerson;
developer = person;
person = developer;

class doomGuy {
  name: string;
}
class doomSlayer {
  name: string;
  skill: string;
}
developer = new doomGuy();
developer = new doomSlayer();

// function type compatibility
let add = function(a: number) {
  // ...
}
let sum = function(a: number, b: number) {
  // ...
}
add = sum;
sum = add;

// generic
interface Empty<T> {
  // nothing...
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2

interface NotEmpty<T> {
  data: T
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2
notEmpty2 = notEmpty1

// 범위가 작은 변수, 함수 등에 범위가 큰 변수, 함수 등을 할당할 수 없음.
// 즉, 할당하려면 해당 타입, 인자, 변수 등을 포함한 상태여야 함.