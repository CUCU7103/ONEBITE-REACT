// 함수선언
// 함수는 호출해야만 사용되어진다.

// function greeting() {
//   console.log("안녕하세요");
// }

// console.log("호출 전");
// greeting(); // 함수를 호출한다.
// console.log("호출 후");

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

// 함수가 선언되기 전에도 실행이 가능하다.
// 호이스팅 기능 -> 끌어올리다.
function getArea(width, height) {
  function another() {
    // 중첩함수
    console.log("anther");
  }

  another();
  let area = width * height;
  return area;
}
