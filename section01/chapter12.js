function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
console.log(varA);

// 1. 함수 표현식

let varB = function () {
  // 익명함수, 값으로써 함수를 생성하는 방법
  // console.log("funcB");
};

varB();

// 2. 화살표 함수
// let varC = function () {
//   return 1;
// };

let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
