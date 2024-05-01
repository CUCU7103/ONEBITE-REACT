// Promise란?

// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장객체
// ex) 비동기 작업 실행, 비동기 작업 상태 관리, 비동기 작업 결과 저장, 비동기 작업 병렬 실행,
// 비동기 작업 다시 실행

// Promise는 3가지의 상태를 가진다.
// 대기 상태 (pending)-> 성공 (resolve), 대기 상태 -> reject 실패
// 성공 상태 (Fullfield)
// 실패 상태

// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업을 실행하는 함수
//   // executor 함수
//   // executor 함수에는 매개변수가 2가지 들어간다.
//   // resolve (성공) reject(실패)
//   setTimeout(() => {
//     console.log("안녕");
//     // resolve("안녕");
//     reject("왜 실패했는가..?");
//   }, 2000);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수 (executor)

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}
// 콜백 지옥이 생각난다 하지만,
// const p = add10(0);
// p.then((result) => {
//   console.log(result);

//   const newP = add10(result);
//   newP.then((result) => {
//     console.log(result);
//   });
//   return newP;
// });

// 이렇게 처리할 수있다.
add10(null)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    // 위의 then중 어디에서 오류가 발생해도 받을 수 있다.
    console.log(error);
  });

// then 메서드
// promise 함수가 실행된 그 후에 성공일 경우
// 콜백함수가 실행되어진다.
// promise 객체를 그대로 반환한다.
// 즉 then 다음에 catch 메서드를 바로 연결할 수있다. (promise Chaning)
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// catch
// promise 함수가 실행된 그 후에 실패할 경우
// promise.catch((error) => {
//   console.log(error);
// });
