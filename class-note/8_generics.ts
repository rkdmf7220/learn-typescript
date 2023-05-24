// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 10
// logText('Hi!'); // 'Hi!'
// logText(true); // true

// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }
// logText('awesome');
// logText<string>('amazing');

// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('')
//   return text;
// }
//
// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }
//
// const a = logText('a');

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);

logText('a');
logText(10);
// logNumber(10);

// interface generic

// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 10, selected: false };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false };

// limiting generic type
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  })
  return text
}
logTextLength<string>(['hello', 'world!']);

// limiting generic type 2 - use defined type
interface ILengthType {
  length: number;
}
function loggedTextLength<T extends ILengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength(10);
logTextLength({ length: 10 });

// limiting generic type 3 - use keyof
interface IShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof IShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");