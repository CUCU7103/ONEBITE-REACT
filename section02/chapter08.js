// 5가지의 요소 순회 및 탐색 메서드
// 1. forEach
// 배열의 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드이다.
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
// console.log(isInclude);

// 3. indeOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 중복된 값이 있다면 맨 앞에 위치한 값을 찾는다.
// 단순한 원시타입의 값을 찾을때 사용한다.
let arr3 = [2, 2, 3];
let index = arr3.indexOf(20);
// console.log(index);

// let objectArr = [{ name: "이정환" }, { name: "홍길동" }];
// console.log(objectArr.indexOf({ name: "이정환" })); // 정확한 값을 찾아내지 못한다.

// console.log(objectArr.findIndex((item) => item.name === "이정환"));

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 중복되는 값이 있다면 먼저 있는 값을 반환한다.
// 조건에 맞는 값이 존재하지 않는다면 -1을 반환한다.
// 객체 값들을 비교하려할때 findIndex를 사용한다.
let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex((item) => {
  if (item % 2 === 0) return true;
});

// console.log(findIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는다. 요소를 그대로 반환한다.

let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이정환");

console.log(finded);
