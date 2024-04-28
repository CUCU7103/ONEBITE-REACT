// 배열 메서드 조작
// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
// arr1.push(4, 5, 6, 7);
const newLength = arr1.push(4, 5, 6, 7);

// console.log(arr1); // [1,2,3,4,5,6,7...]
// console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환한다.

let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// console.log(poppedItem);
// console.log(arr2);

// shift,unshitf는 push와 pop보다는 느리게 작동한다.

// 3.shift
// 배열의 맨 앞에 있는 요소를 제거, 반환함.
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem, arr3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// console.log(newLength2, arr4);

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환한다.

let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // slice에 사용하는 2번째 인수는 반드시 + 1을 해서 사용한다.
let sliced2 = arr5.slice(2); // 2번째 인자를 지정하지 않으면 배열의 마지막 값까지 자른다.
let sliced3 = arr5.slice(-1); // 음수는 뒤에서 부터 자른다.

// console.log(sliced);
// console.log(sliced2);
// console.log(sliced3);

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
