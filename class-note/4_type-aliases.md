## 타입 별칭 (Type aliases)

타입 별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미한다.

```
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
```

인터페이스와 같은 형식 뿐만 아닌, 타입을 정의하는 모든 곳에서 타입 별칭을 사용할 수 있다.

```
type MyString = string;
let str: MyString = "hello";

type Todo = { id: string, title: string; done: boolean };
function getTodo(todo: Todo) {
  // 가독성 향상
}
```

### 특징

타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 추후 쉽게 참고할 수 있게 **이름을 부여하는 것** 과 비슷하다.

인터페이스로 타입을 선언시, 타입 프리뷰에서 `interface Developer`와 같이 나오지만 타입 별칭을 사용해 선언하면 아래와 같은 형식으로 프리뷰가 나온다.

```
type Developer = {
  name: string;
  skill: String;
}
```
