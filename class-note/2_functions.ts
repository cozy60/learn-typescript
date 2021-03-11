// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }
// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30, 40) // error! 불필요한 인자

// 함수의 옵셔널 파라미터
// 추가적으로 들어올 수 있는 파라미터에 대해
// 인자를 생략해도 된다.
function log(a: string, b?: string) {

}
log('hello world');
log('hello ts', 'abc');