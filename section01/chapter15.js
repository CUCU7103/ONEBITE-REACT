// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 방식

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  // key : value
  // key는 문자값과 숫자만 사용이 가능하다.
  // value는 모든 값을 전부 사용이 가능하다.
  name: "이정환",
  age: 27,
  hobby: "테니스",
  job: "BE Devolper",
  extra: {},
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근(점 표기법 , 괄호 표기법)

let name = person.name;

let age = person["age"]; // 접근하고자 하는 key값을 넣어주면된다. "" 를 필수적으로 붙여야한다.

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.1 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.1 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);
