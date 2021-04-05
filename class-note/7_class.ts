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