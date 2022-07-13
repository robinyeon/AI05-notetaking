// 배달 음식 앱 사용자
let user = {
  name: "연다은봄",
  age: 30,
  email: "robin.yeon@gmail.com",
  address: "경기도 화성시",
  food: ["김치찌개", "제육볶음"],

  payment: function () {
    console.log("결제가 완료되었습니다.");
  },

  deliveryStart: function () {
    console.log("배달이 시작되었습니다.");
  },

  //arrow function
  arrow: () => {
    console.log("");
  },
};

// console.log(user);
