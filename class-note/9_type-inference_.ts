// 기본적으로 타입스크립트의 타입 추론 방식은,
// 변수를 선언하거나, 할당하거나
// 파라미터의 기본값을 설정한다거나, 반환값을 설정 할 때 추론이 이뤄진다.

// 타입 추론 기본
var a1 = "abc";

// (parameter) b: number
// 파라미터를 넘기지 않으면 기본적으로 10이라는 값으로 지정한다.
// string과 number를 연산하면 string으로 나오듯이, 밑의 코드도 string으로
// 반환될 것이란 걸 타입스크립트 내부에서 추론한다.
function getB(b = 10) {
  var c = "hi";
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T; // T에 따라 타입이 바뀜
//   title: string; // 고정된 타입
// }

// // shoppingItem에 Dropdown<string>타입이 할당될 때
// // 자연스레 value의 타입이 추론되는 것 또한 TS의 타입 추론이다.
// // 제네릭의 값을 추론하고, 필요한 값까지 추론
// var shoppingItem: Dropdown<string> = {
//   value: "abc",
//   title: "hello",
// };

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
// DetailedDropdown2에 들어간 타입이,
// interface 내부의 tag에도 타입 정의가 되고,
// Dropdown에 있는 타입 또한 K의 타입으로 넘어간다.
interface DetailedDropdown2<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

// 제네릭을 number로 넘기면, 연관된 value와 tag에 에러가 난다.
var DetailedDropdown2: DetailedDropdown2<string> = {
  title: "abc",
  description: "ab",
  value: "a", // string
  tag: "a",
};
