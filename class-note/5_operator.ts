// error!
// function logMessage(value: string) {
//   console.log(value);
// }

// any를 사용해 에러를 해결할 수 있다.
// 하지만 any를 자주 사용하면 타입스크립트의 강점을 잃어버릴 위험이 크다.
function logMessage(value: any) {
  console.log(value);
}

logMessage("Hello");
logMessage(100);

// 유니온 타입
// 하나의 타입 이상을 사용할 수 있도록 한다.
// 파이프 `|` 를 활용해 사용한다.
// any타입의 단점을 보완해준다.
let personName: string | number | boolean;
function logMessage2(value: string | number) {
  if (typeof value === "number") {
    // type에 따른 메서드를 바로 확인할 수 있다.
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}
logMessage2("hello");
logMessage2(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 유니온 타입은 모든 속성을 접근할 수 없고, name과 같은 공통 속성만 접근할 수 있다.
// 이는 Developer와 Person 둘다 type이 될 수 있기에 someone이 어떤 값이 들어올지 모른다.
// 타입 검증 없이 바로 사용하면, 코드상 에러의 요소가 있기에 보장된 속성에 대해서만 제공한다.
// 유니온 타입에서 공통되지 않은 타입을 사용하고싶다면, 타입 가드를 사용해서 접근해야 한다.
function askSomeone(someone: Developer | Person) {
  someone.name;
  someone.skill; // error!
  someone.age; // error!
}

// 인터섹션 타입
let seho: string | number | boolean;
let capt: string & number & boolean; // type: never
// string, number, boolean을 만족해야 하는 타입

// developer의 name과 skil, person의 name과 age를 모두 포함한
// 세개의 속성을 갖고있는 것이 someone이다. (인터섹션)
// 유니온 타입에서 공통되지 않는 타입을 접근시 타입 가드를 사용해야 하는 반면에,
// 인터섹션으로 정의한 타입은 타입가드가 별도로 필요하지 않는다. 바로 접근이 가능하다.
// 하지만 실무에선 유니온 타입을 더욱 많이 사용하게 된다!
function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.skill; // 인터섹션 타입에선 접근이 가능해진다.
  someone.age; 
}

// 유니온 타입과 인터섹션 타입의 차이점
// 유니온 타입
function otherSomeone(someone: Developer | Person) {
  // someone.name;
  // someone.skill; // error!
  // someone.age; // error!
}

// Developer의 name, skil을 가져오거나 Person의 name과 age를 갖고 오기만 하면 된다.
otherSomeone({ name: "디벨로퍼", skill: "웹 개발" }); // 데이터 규격: developer
otherSomeone({ name: "유갱", age: 100 }); // 데이터 규격: person

// 인터섹션 타입
function otherSomeone2(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone2({ name: "디벨로퍼", skill: "웹 개발" }); // error!

// developer와 person을 합한 객체의 속성값을 넘겨야 한다.
askSomeone2({ name: "디벨로퍼", skill: "웹 개발", age: 30 });

// 유니온 타입은 타입 추론을 지켜나가야 하는 반면에 넘기는 타입에 대해선 선택지가 생긴다.
// 인터섹션 타입은 두 타입을 모두 포함하는 새로운 타입을 만들게 된다. 

