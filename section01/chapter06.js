// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환하는 것

let num = 10;
let str = "20";

const result = num + str; // 묵시적으로 num이 string으로 변경되어짐
console.log(result);

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시한다.
// -> 문자열 -> 숫자

let str1 = "10";
let strToNum1 = Number(str1); // 명시적 형변환
// console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
// 문자와 숫자가 섞여잇는 문자열에서 숫자만 추출함
// 단 숫자가 문자 앞에와야한다.
console.log(strToNum2);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1);
