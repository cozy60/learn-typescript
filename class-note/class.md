## 자바스크립트의 프로토타입

```
var user = { name: "capt", age: 100 };
```

`user`라는 객체가 있다고 가정했을 때, `role` 이라는 속성을 추가한 `admin` 객체에서 해당 객체의 값을 똑같이 사용하고 싶다고 예를 들자.

```
var admin = { name: "capt", age: 100, role: "admin" };
```

앞서 작성된 `user` 객체와 공통된 속성이 발견된다. 이때 프로토타입을 이용하면 코드를 간편하게 사용할 수 있다.

### **proto**

```
var admin = {}; // 먼저 빈 객체를 선언한다.
admin2.__proto__ = user // {name: "capt", age: 100}
```

`admin`객체의 `role`을 추가해보자,

```
admin.role = "admiin"; // "admin"
console.log(admin)
```

```
// 출력 결과
{ role: "admin" }
  role: "admin"
    __proto__:
      age: 100
      name: "capt"
      __proto__: Object
```

바로 한단계 위의 프로토타입, 상위 오브젝트의 속성을 사용할 수 있게 된다. 이것을 상속받는다고 얘기한다. 우리가 그동안 사용한 함수나 배열 등등은 자바스크립트의 프로토를 사용해 이뤄져 있음을 알 수 있다.

기본적으로 객체를 생성해 콘솔에 출력하면 프로토타입을 확인할 수 있는데, 확인해보면 Object라고 출력된다. 최상위 객체가 있기 때문에 객체에 정의된 메서드와 속성을 사용할 수 있게 된다.

`Javascript Native Api` 를 통해 프로토타입을 우리가 일상생활 속에서 사용할 수 있게 된다. 단순히 객체의 재활용이 아닌 기능들을 사용해 객체를 생성하거나 배열을 제어하는데 사용하게 된다.

## 프로토타입과 클래스의 관계

```
// 생성자 함수
// 프로토타입 기반의 상속
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person("캡틴", 100);

// ES6
class Person {
  constructor(name, age) { // 초기화 메서드
    console.log("생성 완료");
    this.name = name;
    this.age = age;
  }
}

new Person(); // "생성 완료" 출력
var seho = new Person("세호", 30); // 객체 생성
console.log(seho);

// 위의 코드와 아래 코드는 같은 코드이다.
// 아래 코드는 문법적 설탕을 이용해 좀더 보기 쉽게 사용한 예이다.
// class를 이용하지 않고, 프로토타입을 사용해서도 상속을 구현할 수 있다.
```

## 타입스크립트에서의 클래스

```
// 기존 생성자에선 바로 멤버변수를 사용할 수 있지만,
// ts에서는 클래스의 최상단에서 멤버변수를 정의해야 한다.
class Person {
  // 타입 정의 (차이점 1)
  private name: string; // 변수의 활용 범위까지 설정할 수 있다. (차이점 2)
  public age: number; // 기본값은 public 이다.
  readonly log: string; // readonly는 읽기만 가능하고, 따로 수정은 불가하다.
  constructor(name: string, age: number) {
    // 파라미터의 타입 정의 (차이점 3)
    this.name = name;
    this.age = age;
  }
}
```
