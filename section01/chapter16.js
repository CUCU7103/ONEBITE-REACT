// 1. 상수 객체
// 프로퍼티에 값을 추가하거나 수정하거나, 삭제가 가능하다.
// 아예 새로운 프로퍼티에 값을 추가하지는 못한다.
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함.
// 객체의 동작을 담당한다.
const person = {
  name: "이정환",
  // 메서드
  sayHi() {
    console.log("안녕");
  },
};

person.sayHi();
person["sayHi"];
