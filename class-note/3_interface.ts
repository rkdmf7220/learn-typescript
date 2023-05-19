interface IUser {
  age: number;
  name: string;
}

let seho: IUser = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: IUser) {
  console.log(user);
}
const capt = {
  name: 'Captain',
  age: 100
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface ISumFunction {
  (a: number, b: number): number
}

let sum: ISumFunction;
// sum = function (a: number, b: number): number {
//   return a + b;
// }
sum = function (a, b) {
  return a + b;
}

// 인덱싱
interface IStringArray {
  [index: number]: string
}

let arr: IStringArray = ['a', 'b', 'c']
// arr[0] = 10;

// 딕셔너리 패턴
interface IStringRegexDictionary {
  [key: string]: RegExp;
}

let obj: IStringRegexDictionary = {
  // sth: "/abc/",
  cssFile: /\.css$/,
  jsFile: /\.js$/
}
obj['cssFile'] = 'a';

Object.keys(obj).forEach(function(value) {});

// 인터페이스 확장
interface IPerson {
  name: string;
  age: number;
}

// interface IDeveloper {
//   name: string;
//   age: number;
//   language: string;
// }
interface IDeveloper extends IPerson{
  language: string;
}

let ironman: IDeveloper = {
  name: 'tony',
  age: 40,
  language: 'english'
}