function fetchItems(): string[] {
  const items = ['a', 'b', 'c'];
  return items;
}
let result = fetchItems(); // 타입 추론에 의해 string으로 return값이 정해짐
console.log(result); // string

// return값의 타입값을 주지 않더라도 타입스크립트는 내부적으로 안쪽의 변수를 리턴한다고
// 타입추론을 하고 있다. 실행이 바로바로 가능한 코드는 타입스크립트가 자동적으로 추론이 가능하다.

// 그러나, 비동기적인 코드(아래에선 Promise)를 작성시 타입스크립트는
// Promise<unknown> 이라고 타입추론을 한다.
// 이는 fetchItems2를 실행한 시점에서,
// 타입스크립트가 프로미스 내부 비동기코드를 모르기 때문에 이런 결과가 나타난다.

// 타입스크립트 내부에서 제공하는 Promise의 타입들
// new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
// Promise는 제네릭을 사용해 타입을 명시하고 있다.
// 제네릭을 통해 타입을 선언하고, 제네릭으로 타입을 반환받는다.
function fetchItems2() {
  const items = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}

// Promise의 반환값 명시하기
function fetchItems3(): Promise<string[]> {
  const items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items); // Promise에 resolve된 값이 Promise의 value가 됨
  });
}
