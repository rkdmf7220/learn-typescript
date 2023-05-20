interface IPerson {
  name: string;
  age: number;
}

type Person = {
  name: string;
  age: number;
}

let seho: IPerson = {
  name: '세호',
  age: 30
}

let daeho: Person = {
  name: '대호',
  age: 30
}

type MyString = string;
let str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {
  // some
}