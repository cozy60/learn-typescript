## Interface

인터페이스는 타입 지정을 쉽게 할 수 있도록 도와준다. `interface`를 사용하지 않고 `Type aliases`를 사용해서도 Type을 지정할 수 있다.

```
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
```

인덱싱에서도 타입을 정의할 수 있다.

```
// 인덱싱
// arr[0] = 10; // error!
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a','b','c'];

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
```

### 인터페이스 확장

`extends` 키워드를 사용해 인터페이스를 상속받을 수 있다.

```
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
```

## Interface와 Type aliases의 차이점

```
// Interface
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// Type aliases
const todos: Todo = {
  id: 1,
  title: "할일",
  done: true
}
```

기본적으로 두 방식 다 타입을 지정하는 방법은 동일하다. 단`Interface`는 **선언 병합**이 가능하지만, `Type aliases`은 그렇지 않다.

`Interface`는 여러곳에서 사용되는 새로운 이름을 만드지만, `Type aliases`는 새로운 이름을 만들지 않는다.

`Type aliases`는 `extend`되거나 `implement`될 수 없다. (또 하나의 type이 다른 type을 extend/implement 할 수도 없다.)

타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 추후 쉽게 참고할 수 있게 **이름을 부여하는 것** 과 비슷하다.

인터페이스로 타입을 선언시, 타입 프리뷰에서 `interface Developer`와 같이 나오지만 타입 별칭을 사용해 선언하면 아래와 같은 형식으로 프리뷰가 나온다.

```
type Developer = {
  name: string;
  skill: String;
}
```

### Interface의 선언 병합

`Interface`는 동일한 이름으로 여러번 선언해도 컴파일 시점에서 아래처럼 합칠 수 있다. 이러한 동작을 선언 병합(Declaration Merging)이라고 한다.

```
interface Window {
  title: string;
}

interface Window {
  ts: import("typescript");
}

declare function getWindow(): Window;

const window = getWindow();
const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});    // transpileModule() 메서드 사용 가능
```

가능한 `Interface` 를 주로 사용하고, 합타입 혹은 튜플 타입과 같이 `Interface`로 표현할 수 없어 **반드시** 사용해야 하는 상황이면 `Type aliases`을 쓰도록 한다.

## Reference

https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard

https://medium.com/@alexsung/typescript-type%EA%B3%BC-interface-%EC%B0%A8%EC%9D%B4-86666e3e90c

https://medium.com/humanscape-tech/type-vs-interface-%EC%96%B8%EC%A0%9C-%EC%96%B4%EB%96%BB%EA%B2%8C-f36499b0de50
