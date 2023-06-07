// ES5 - 함수 선언문
function sum1(a, b) {
  return a + b;
}

// ES5 - 함수 표현식
let sum2 = function (a, b) {
  return a + b;
};

// ES6+ - 함수 표현식(화살표 함수)
let sum3 = (a, b) => {
  return a + b;
};

let sum4 = (a, b) => a + b;

// TS의 화살표 함수
let sum5 = (a: number, b: number): number => {
  return a + b;
};
