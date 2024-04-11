// 1. Spread 연산자
//  -> Spread : 흩뿌리다, 펼치다라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
// console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

function fucnA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

fucnA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(one, ...rest) {
  // 첫 번재로 전달된 인수 외의 모든 인수는 ...rest에 포함되어진다.
  // rest 매개변수뒤에 추가적으로 매개변수를 사용할 수 없다.
  // 작성 문법은 ...(임의의 단어)
  console.log(one);
  console.log(rest);
}

funcB(...arr1);
