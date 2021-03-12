enum Shoes {
  Nike,
  Adidas,
}

// 별도의 값을 지정하지 않으면 숫자형 enum으로 취급된다.
let myShoes = Shoes.Nike; // 지정하지 않을때 Nike의 실질 값은 0 이다.
console.log(myShoes); // 0


enum Shoes2 {
  Nike = "나이키",
  Adidas ="아디다스",
}

let myShoes2 = Shoes2.Nike; 
console.log(myShoes2); // 나이키

// 예제
function askQuestion(answer: string) {
  if (answer === "yes") {
    console.log("정답입니다.")
  }
  if (answer === "no") {
    console.log("오답입니다.");
  }
}

// 인자로 다양한 값들을 넣을 수 있을텐데, 이러한 상황에서
// 이넘을 사용해 구체적으로 정할 수 있다.
askQuestion("예스");
askQuestion("y");
askQuestion("Yes");

// 이넘 활용
enum Answer {
  Yes = "Y",
  No = "N",
}

// 들어온 파라미터의 값이 단순한 문자열 비교가 아닌 우리가 갖고있던
// 타입중 하나인지 비교하게 된다.
function askQuestion2(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.")
  }
  if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}

askQuestion2("Yes"); // error!
askQuestion2(Answer.Yes); // 이넘에서 제공하는 데이터만 적용