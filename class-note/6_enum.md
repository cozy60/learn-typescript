## 이넘 (Enums)

이넘은 특정 값들의 **집합** 을 의미하는 자료형이다.

```
enum Shoes {
  Nike,
  Adidas,
}

// 별도의 값을 지정하지 않으면 숫자형 enum으로 취급된다.
let myShoes = Shoes.Nike; // 지정하지 않을때 Nike의 실질 값은 0 이다.
console.log(myShoes); // 0
```

별도의 값을 지정시

```
enum Shoes2 {
  Nike = "나이키",
  Adidas ="아디다스",
}

let myShoes2 = Shoes2.Nike;
console.log(myShoes2); // 나이키
```

### 이넘의 활용 방법

아래와 같은 방법으로 처리시, 다양한 인자값에 대해 예외처리를 하기 까다로워진다. 이럴때 이넘을 사용해 효율적인 예외처리를 할 수 있게된다.

**이넘 적용 전**

```
function askQuestion(answer: string) {
  if (answer === "yes") {
    console.log("정답입니다.")
  }
  if (answer === "no") {
    console.log("오답입니다.");
  }
}

askQuestion("예스"); // undefined
askQuestion("y"); // undefined
askQuestion("Yes"); // undefined
```

**이넘 적용 후**

```
enum Answer {
  Yes = "Y",
  No = "N",
}

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
```

이넘을 적용 후 비교시 들어온 파라미터의 값이 단순한 문자열 비교가 아닌 우리가 갖고있던 타입중 하나인지 비교하게 된다. 이넘을 사용할 시 예외처리가 더욱 간단해진다.