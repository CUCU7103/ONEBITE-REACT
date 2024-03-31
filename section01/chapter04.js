// 1. 변수
//  변수를 생성한다 == 변수를 선언한다, 변수를 초기화한다.
let age;

// let age = 27;
// console.log(age);

age = 30;

// 2. 상수
// 변경되지 않는 값들을 선언할때 사용한다
// 반드시 초기화가 되어야한다.
// 선언 이후에 값을 넣을 수가없기 때문이다.
const birth = "1997.01.07";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $,_ 를 제외한 기호는 사용할수없다.
// let name#
let $_name;

// 3-2 숫자로 시작할 수 없다.
let name1;
let $2name2;

// 3-3 예약어로 변수를 사용할 수가 없다.
// let if if는 예약어 이기 때문에 변수명으로 사용할 수가 없다.

// 4. 변수 명명가이드\
// 이렇게 설정하는 것보다는
let a = 1;
let b = 1;
let c = a - b;

// 아래와 같이 설정하는 것이 훨씬 좋은 변수 명명법이다.
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
