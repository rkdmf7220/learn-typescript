// JS string declaration
let strA = 'hello';

// TS string declaration
let strB: string = 'hello';

// TS number declaration
let num: number = 10;

// TS array declaration
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk']
let items: number[] = [1, 2, 3];

// TS tuple
// 배열의 각 index에 type을 지정
let address: [string, number] = ['seoul', 28];

// TS 객체
let obj: object = {};
let person: object = {
  name: 'capt',
  age: 100
};
let personB: { name: string, age: number } = {
  name: 'tony',
  age: 40
}

// TS boolean
let show: boolean = true;