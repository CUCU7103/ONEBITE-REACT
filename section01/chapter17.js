// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용함.)

let arrC = [1, 2, 3];

// 배열에는 다양한 형식의 값을 집어넣을 수있다
let arrCT = [1, 2, 3, true, "hello", null, undefined, () => {}];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello";

console.log(arrC);
