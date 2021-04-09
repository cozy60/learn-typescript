// 하나의 인터페이스로 제네릭을 이용해 여러가지 타입을 제어함
// 제네릭의 장점
// 타입 코드를 줄일 수 있다.
interface DropdownItem<T> {
  value: T;
  selected:  boolean;
}

// interface Email {
//   value: string;
//   selected: boolean;
// }

// const emails: Email[] = [
//   { value: 'naver.com', selected: true },
//   { value: 'gmail.com', selected: false },
//   { value: 'hanmail.net', selected: false },
// ];

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// const numberOfProducts: ProductNumber[] = [
//   { value: 1, selected: true },
//   { value: 2, selected: false },
//   { value: 3, selected: false },
// ];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem(item: { value: string; selected: boolean }) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }
// emails의 타입만 받을 수 있음, numberOfProducts의 타입은 받지 못함
// 두 배열의 타입을 모두 받을 수 있는 방법을 써야한다.

// 유니온 타입 ver
// 인터페이스도 활용하기
// function createDropdownItem(item: Email | ProductNumber) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// 제네릭 ver
function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// 단, 이렇게 하면 동일한 속성들인데 중복된 인터페이스들이 존재함
// 타입이 바뀌었다고 새로 인터페이스를 선언하는게 불편해짐
// 어떤 타입이 오던, 유연하게 쓰고 싶을 때 제네릭을 사용할 수 있다.

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (producrt) {
  const item = createDropdownItem(producrt);
});