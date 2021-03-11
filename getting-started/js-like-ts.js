
// JSDoc을 사용해서 타입 지정하기

// @ts-check

/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum(a, b) {
  return a + b;
}
sum(10, 20);
  
  // JSDoc을 이용해 타입을 지정하면, vsc에서 a와 b에 커서를 올릴 시
  // 타입과 지정해준 이름이 나타난다.