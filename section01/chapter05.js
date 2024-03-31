console.log("chapter05");
// 1. number type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// 사칙연산이 가능하다.
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 / num2);
// console.log(num1 * num2);
// console.log(num1 % num2);

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // 사칙연산 실패시 결과값
// console.log(1 * "hello");

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;

// console.log(introduce);
//  `` 백틱
// 탬플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
// console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null type(아무것도 없다.)
// 이 변수에 어떠한 값도 넣지 않음.
let empty = null;

// 5. Undefined type  q
// 변수를 선언하고 아무 값도 넣지 않았을때 발생하는 것
let none;
console.log(none);
