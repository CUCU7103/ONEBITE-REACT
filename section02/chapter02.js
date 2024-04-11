// 단락 평가
// 첫번째 피연산자로 논리결과값이 나온다면 그 이후의 피연산자에 접근하지 않는다.

// function returnFalse() {
//   console.log("False 함수");
//   return false;
// }

// function returnFalse() {
//   console.log("False 함수");
//   return undefined; // falsy 한 값
// }

// function returnTrue() {
//   console.log("True 함수");
//   return true;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return 10; // Truthy 한 값  반환값이 falsy나 Truthy라면 해당 값을 반환한다.
// }

// console.log(returnFalse() && returnTrue());  // false 함수 출력,
// console.log(returnTrue() && returnFalse()); // true 함수 출력 , false 함수 출력

// console.log(returnTrue() || returnFalse()); // True 함수

// console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name; // 객체값이 정확하게 들어오면 출력 아니면 person의 값이 없음을 출력
  console.log(name || "person의 값이 없음");
}
// t || t 일 경우 첫번째 값이
// t && t 일 경우 두번째 값이 반환되어진다..
printName();
printName({ name: "이정환" });
