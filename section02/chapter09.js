// 5가지 배열 변형 메서드
// 1.filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
// 웹 서비스에서 특정 조건에 의해서 검색이나 카테고리별 필터에서 필수적인 기능이다.

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

// console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로
// 반환한다.

let arr2 = [1, 2, 3];
// arr2.map((item, idx, arr) => {
//   console.log(idx, item);
//   return item * 2;
// });

const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

// console.log(mapResult1);

let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드이다.
let arr3 = ["b", "a", "c"];
//  숫자로 이루어진 배열이라면 제대로 정렬되지 않는다.
let arr4 = [10, 3, 5, 6];

arr3.sort();
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a앞에 와라
    return 1; // 양수 반환
  } else if (a < b) {
    // a가 b앞에 와라
    return -1; // 음수 반환
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});
// 내림차순은 반대로 설정하면 된다.

// console.log(arr3);
// console.log(arr4);

// 4. toSorted
// 원본 배열을 유지하고 정렬된 새로운 배열을 반환하는 메서드 입니다.
//
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(",");
console.log(joined);
