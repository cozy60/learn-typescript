## 타입 지정

### String
```
let str: string = 'hi';
```
### Number
```
let num: number = 10;
```
### Boolean
```
let isLoggedIn: boolean = false;
```
### Array
```
let arr: number[] = [1,2,3];
```
제네릭을 사용할 시 아래와 같이 사용한다.
```
let arr: Array<number> = [1,2,3];
```
### Tuple
튜플은 배열의 길이가 고정되고 각 요소의 타입이 지정된 배열 형식을 의미한다.
```
let arr: [string, number] = ['hi', 10];
```
### Enum
-- 학습 후 추가 --
### Any
모든 타입을 허용한다는 의미를 갖는다.
```
let str: any = 'hi';
let num: any = 10;
```
### Void
변수에는 `undefined`와 `null`만 할당하고, 함수에는 반환값을 설정할 수 없는 타입이다.
```
let unuseful: void = undefined;
function notuse(): void {
  console.log("sth");
}
```

## 함수
함수는 타입스크립트로 크게 다음 3가지 타입을 정의할 수 있다.
* 함수의 파라미터 타입
* 함수의 반환 타입
* 함수의 구조 타입

### 함수의 기본적인 타입 선언
**매개변수**와 함수의 **반환 값**에 타입을 추가한다. 함수의 반환값을 정의하지 않을 때는 `void`라도 사용하도록 한다.
```
function sum(a: number, b: number): number {
  return a + b;
}
```
### 함수의 인자
타입스크립트에서는 함수의 인자를 모두 필수 값으로 간주한다. 따라서 함수의 매개변수를 설정하면 `undefined`나 `null`또한 인자로 넘겨야 하기에 컴파일러에서 정의된 매개변수 값이 넘어온지 확인한다.
이는 정의된 매개변수 값만 받을 수 있고 추가로 인자를 받을 수 없다는 의미이다.
```
function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30) // error, too many parameters
sum(10) // error, too few parameters
```
정의된 매개변수의 갯수만큼 인자를 넘기고 싶지 않으면 `?`를 이용해 아래와 같이 정의한다.
```
function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30) // error, too many parameters
sum(10) // 10
```

## Interface
인터페이스는 타입 정의를 효율적으로 할 수 있게 도와준다. `Type`을 이용해서도 타입 정의를 할 수 있다.
```
// interface 사용 전
let todoItems: { id: number; title: string; done: boolean; }[];

function fetchTodoItems(): { id: number; title: string; done: boolean; }[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}
```
```
// Type 사용
type Todo = {
  id: number,
  title: string,
  done: boolean;
}

let todoItems: Todo[];

function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}
```

```
// interface 사용 후
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[];

function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}
```

## Type과 Interface의 차이

### type
```
type Todo = {
  id: number,
  title: string,
  done: boolean;
}

const todos: Todo = {
  id: 1,
  title: "할일",
  done: true
}
```
### interface
```
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

const todos: Todo = {
  id: 1,
  title: "할일",
  done: true
}
```

기본적으로 두 방식 다 타입을 지정하는 방법은 동일하다. 하지만, `Interface`는 **선언 병합**이 가능하지만, `Type aliases`은 그렇지 않다.

`Interface`는 여러곳에서 사용되는 새로운 이름을 만드지만,  `Type aliases`는 새로운 이름을 만들지 않는다.

`Type aliases`는 `extend`되거나 `implement`될 수 없다. (또 하나의 type이 다른 type을 extend/implement 할 수도 없다.)

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
https://joshua1988.github.io/ts/guide/interfaces.html#%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%A7%9B%EB%B3%B4%EA%B8%B0

https://medium.com/@alexsung/typescript-type%EA%B3%BC-interface-%EC%B0%A8%EC%9D%B4-86666e3e90c

https://medium.com/humanscape-tech/type-vs-interface-%EC%96%B8%EC%A0%9C-%EC%96%B4%EB%96%BB%EA%B2%8C-f36499b0de50