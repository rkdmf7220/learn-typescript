// function logMessage(value: string) {
//   console.log('value >>', value)
// }
// logMessage('hello');
// logMessage(100);

// Union type
// function logMessage(value: string | number) {
//   console.log(value)
// }

function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString()
  }
  if (typeof value === 'string') {
    value.toString()
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

let seho: string | number | boolean;

interface IDeveloper {
  name: string;
  skill: string;
}
interface IPerson {
  name: string;
  age: number;
}
function askSomeone(someone: IDeveloper | IPerson) {
  console.log(someone.name)
  console.log(someone.skill)
  console.log(someone.age)
}
askSomeone( { name: '개발자', skill: '웹 개발' })
askSomeone( { name: '누군가', age: 100 })

// intersection type
// let ryujin: string | number | boolean;
// let annie: string & number & boolean;

function askSomebody(somebody: IDeveloper & IPerson) {
  console.log(somebody.name)
  console.log(somebody.skill)
  console.log(somebody.age)
}
askSomebody({ name: '개발자', skill: '웹 개발', age: 33 })