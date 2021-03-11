// 타입 별칭
// 타입 별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미한다.

// string 타입을 사용할 떄
const heroName: string = 'capt';

// 타입 별칭을 사용할 때
type MyName = string;
const heroName2: string = 'capt';

// 인터페이스와 유사한 타입 별칭
type Developer = {
  name: string;
  skill: string;
}

// 타입 별칭에 제네릭 사용하기
type User<T> = {
  name: T
}

// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
}

let seho: Person = { 
  name: "세호",
  age: 30
}

// 인터페이스와 같은 형식 뿐만 아닌, 타입을 정의하는 모든 곳에서
// 타입 별칭을 사용할 수 있다.
type MyString = string;
let str: MyString = "hello";

type Todo = { id: string, title: string; done: boolean };
function getTodo(todo: Todo) {
  // 가독성 향상
}