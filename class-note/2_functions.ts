// TS function parameter type
function sum(a: number, b: number) {
  return a + b;
}
sum(10, 20);

// TS function return type
function add(): number {
  return 10;
}

// TS function type declaration
function sum2(a: number, b:number): number {
  return a + b;
}
sum2(10, 20);

// TS optional parameter
function log(a: string, b?: string, c?: string) {

}
log('hello world');
log('hello ts', 'abc')