interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const seho: User = {
  age: 33,
  name: "세호"
}

// 함수에 인터페이스 활용
function getUser(user: User) { // 파라미터에 타입 적용
  console.log();
}
const capt = {
  name: "캡틴",
  age: 13
}
getUser(capt); // 함수 호출시 인자가 파라미터에 정의한 인터페이스의 규칙을 따라야 함

// 함수의 스펙(구조)에 인터페이스를 활용
// 함수의 모습을 정의하는 것이 타입스크립트의 장점 중 하나
interface SumFunction {
  (a: number, b: number): number; // 인자와 반환 타입 정의
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
// 인덱싱 방식에 대해서도 타입을 정의할 수 있다.
// arr[0] = 10; // error! 
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a','b','c'];
// arr[0] = "10";

// 딕셔너리 패턴
// 인덱싱과 유사한 패턴
interface StringRegexDictionary {
  [key: string]: RegExp; // 정규표현식 타입
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  // cssFile: 'css' // 정규표현식이 아닌 문자열로 오기에 에러가 난다.
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
// obj['cssFile']='a'; // error!

Object.keys(obj).forEach((value) => {
  // value에 커서를 갖다 대면 string으로 나온다.
  // 이것을 타입 추론이라고 얘기한다.
})

// 인터페이스 확장 (extends)
// OOP의 상속, 자바스크립트의 프로토타입과 유사한 개념
// 기존의 인터페이스를 상속받아 확장해서 사용한다.
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let captain: Developer = {
  language: "ts",
  age: 100,
  name: "캡틴",
}