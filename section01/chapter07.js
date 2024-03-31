//1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;
console.log(num6);

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;

// 4. 증감 연산자 (++,--)
let num8 = 10;
// console.log(num8++);  8
// num8++; // 이 행 이후에 값이 증가된다.
console.log(num8); // 10
console.log(++num8); // 전위 연산
console.log(num8++); // 후위 연산
console.log(num8);

// 5. 논리 연산자
let or = true || false;
// 하나만 값이 참이면 참이다.

let and = true && false;
// 둘다 참이여야 값이 참이다.

let not = !true;
// 참을 거짓으로, 거짓을 참으로

console.log(or, and, not);

// 6. 비교 연산자
// 자바스크립트에서는 === 을 사용해야
// 타입까지 비교할 수있다.
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
// console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4);

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6);
