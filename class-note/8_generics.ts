function logText(text) {
  console.log(text);
  return text;
}
logText(10); // 숫자 10
logText("하이"); // 문자열 하이
logText(true) // 진위값 true

function logText2<T>(text: T):T { // 인자값, 반화값 모두 문자열이 된다.
  console.log(text);
  return text;
}
logText2<string>("하이"); // 함수를 호출할때 인자의 타입을 지정함

// 호출하는 시점에 문자열이 됐건, 숫자가 됐건 정의한 타입을 넘겨주는게
// 제네릭

// 기존의 여러 타입을 받는 방법 1
// 함수를 여러개 생성하기

// function logText3(text: string) {
//   console.log(text);
//   // text.split("").reverse().join("");
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }


// 단순히 타입을 다르게 받기 위해 중복되는 코드를 생성하는 것은
// 가독성 뿐만이 아니라 유지보수 측면에도 좋지 않다
// 이럴때 유니온 방식을 사용 할 수 있지만,
// 반환값에서 문제가 생길 수 있다.

// 유니온 타입 ver.
function logText3(text: string | number) {
  console.log(text);
  // text.split("").reverse().join("");
  return text;
}

const a = logText3("a"); // string과 number 타입이 됨
a.split("") // 에러, string | number' 형식에 'split' 속성이 없습니다.
logText3(10); 

// 제네릭 ver.
function logText4<T>(text: T):T { // 제네릭을 쓸 거라는 정의
  // 인자값, 반환값 모두 제네릭
  console.log(text);
  // text.split("").reverse().join("");
  return text;
}
const str = logText4<string>("a"); // 호출할 때 타입정의, 인자값 반환값 string
str.split(""); // 문자열이기에 split 사용 가능
const login = logText4<boolean>(true);
