// 동기
// 여러작업이 존재할때 순서대로 하나씩 처리하는 것을 동기적으로 처리한다고 한다.
// 쓰레드

console.log(1);

// setTimeout(() => {}, ms)
// 자바스크립트의 비동기작업은 web api가 대신 실행시켜준다.
// 그래서 병렬처리가 가능한 것이다.
setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
 