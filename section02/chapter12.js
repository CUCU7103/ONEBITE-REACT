// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }

// // 비동기함수에서 구한 값을 함수 밖에서 사용하고자 할때는 callback 함수를 사용하자
// add(1, 2, (value) => {
//   console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezeFood = `냉동된 ${food}`;
    callback(freezeFood);
  }, 1500);
}

// 비동기 함수 내에서 비동기 함수 호출하기
orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezeFood) => {
      console.log(freezeFood);
    });
  });
});
