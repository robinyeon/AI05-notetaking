const now = new Date();
// console.log(now);
// console.log(typeof now);

// console.log("Year: " + now.getFullYear());
// console.log("Month: " + now.getMonth());
// 이러한 내용들은 외우는것이 아닌 문서를 찾아가며 사용하는 것이다. 능숙함의 차이.

// 우리나라의 표준시대로 변환을 시켜주는 코드
// console.log(now.toLocaleString());

// 시간이 흘러 자연스럽게 이해가 되는 것이니, 지금은 '그냥 그런게 있었다'라고 넘어가는 것도 스킬
// constructor 생성자 === 객체와 같은 개념이다. 다만 생긴게 조금 다르다.

// let yeon = {
//   name: "연다은봄",
//   address: "화성시",
// };

// let park = {
//   name: "박",
//   address: "성동구",
// };

// let kim = {
//   name: "김",
//   address: "광진구",
// };
// let lee = {
//   name: "이",
//   address: "송파구",
// };

function Address(name, address) {
  this.name = name;
  this.address = address;
} // 생성자 함수에 return을 하는 것은 의미가 없기 때문에 쓰지 않습니다.

let lee = Address("이", "인천");
console.log(lee); // undefined가 뜬다. 인스턴스화해서 메모리에 올려야 콘솔에 찍히는건데 아직 new로 올라가지 않았으니 undefined.
// 객체로 사용하기 위해 메모리에 올리는 과정이 인스턴스다.

let park = new Address("박", "성동구"); // new라고 하는 건 생성자를 활용하여 새로운 값을 집어넣은 데이터를 만드는 것이다. 그리고 이것의 type은 함수가 아닌 Object!
let yeon = new Address("연", "화성시");
console.log(park);
console.log(yeon);

// function Calculator(a, b) {
//   let a = 1;
//   let b = 2;
//   return a + b;
// }

function Cal() {
  this.a = 1;
  this.b = 2;
  this.sum = function () {
    return this.a + this.b;
  };
}

const c = new Cal();
console.log(c.sum()); //console.log(Cal.sum())은 에러가 난다.

// Calculator(1, 2);
// Calculator(2, 2);
// Calculator(3, 2);
