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