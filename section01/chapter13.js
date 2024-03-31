// 1. 콜백함수
function main(value) {
  //   console.log(value);
  //   console.log(1);
  //   console.log(2);
  value();
  //   console.log("end");
}

function sub() {
  // 콜백함수이다.
  //   console.log("i am sub");
}

// main(sub);

main(() => {
  // 콜백함수, 화살표 함수형식으로 변환하여 적용
  //   console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
  return console.log(idx + 1);
});

// repeat(5, function (idx) {
//   console.log(idx * 2);
// });

// repeat(5, function (idx) {
//   console.log(idx * 3);
// });
