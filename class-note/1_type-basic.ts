// JS 문자열 선언
// var str = "hello";

// TS 문자열 선언
let str: string = "hello"; 

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1,2,3]; // 배열 안에 number만 가능하다.
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10] // error!
let items: number[] = [1,2,3]; // 배열 리터럴 방식

// TS 튜플
// 순서의 타입까지 정의 하는 것을 튜플이라 한다.
// let address: [string, number] = ['gangnam', 'pangyo']; // error!
let address: [string, number] = ['gangnam', 10];

// TS 객체
let obj: object = {};
// let person: object = {
//   name: 'capt',
//   age: 100
// };

// 객체 안 속성의 타입까지 정의하기
let person: { name: string, age: number } = {
  name: 'thor',
  age: 1000
}

// TS 진위값
let show: boolean = true;