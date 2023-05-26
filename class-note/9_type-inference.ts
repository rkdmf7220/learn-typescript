// Basic type inference 1
let a = '10';

function getB(b = 10) {
  let c = 'hello'
  return b + c;
}

// Basic type inference 2
// interface IDropdown<T> {
//   value: T;
//   title: string;
// }

// let shoppingItem: IDropdown<string> = {
//   value: 'something',
//   title: 'theme'
// }

// Basic type inference 3
interface IDropdown<T> {
  value: T;
  title: string;
}
interface IDetailedDropdown<T> extends IDropdown<T>{
  description: string;
  tag: T;
}

let detailedItem: IDetailedDropdown<string> = {
  title: 'hello',
  description: 'world!',
  value: 'Lorem',
  tag: 'Ipsum'
}

let shoppingItem: IDropdown<string> = {
  value: 'something',
  title: 'theme'
}

// Best common type
let arr = [1, 2, true] // number | boolean

// Contextual typing
window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button);    // OK
  console.log(mouseEvent.kangaroo);  // Error
}

window.onscroll = function (uiEvent) {
  console.log(uiEvent.button);  // error
}

const handler = function(uiEvent) {
  console.log(uiEvent.button);  // OK
}