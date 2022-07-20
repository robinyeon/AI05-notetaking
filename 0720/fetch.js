const getBtn = document.querySelector("#get-btn");
const postBtn = document.querySelector("#post-btn");

// 하나의 함수로 2가지 기능을 할 수 있게끔 제작
// 메소드들: GET, POST, PUT, DELETE, PATCH
// const sendHttpRequest = (메소드, url(엔드포인트), 데이터들) => {};
const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { "Content-Type": "application/json" } : {},
  }).then((response) => {
    if (response.status >= 400) {
      return response.json().then((err) => {
        const error = new Error("넌 실수를 하였다!");
        // error.data = err;
        throw error;
      });
    }
    return response.json();
  });
};

// 응답객체가 json으로 넘어오기 때문에.
// 에러는 밑에서 catch로 잡아주고 있다. then으로 이어주고 있을뿐. 만약 원한다면 윗쪽에서도 catch로 처리해줘도 된다.
// throw error라고 전해줬기 때문에 reject에서 인식할 수 있는 것이다. 400이라고 컴퓨터가 무조건 에러로 인지하는게 아냐!
// 저기 if문에서 우리가 특정 코드를 기준으로 걸러서 그 거른 값을 error라고 던졌기 때문에?(throw) -> 컴퓨터가 '아 , 얘는 reject 해야 하는 거구나' 인식하고 -> catch로 잡는 거 같아요
// 저렇게 에러라고 우리가 지정해주기 전까지는 js는 그냥 일단 저런 코드(404.400...) 가 있다 하고 들고만 오는 거 같..은...데.....

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users").then((result) => {
    console.log(result);
  });
};

// POST 전송
const sendData = () => {
  sendHttpRequest("POST", "https://reqres.in/api/register", {
    //요청에 대한 조건(이런식으로 요청을 해라)
    // <input name="email"/> <input name="password"/>의 내용들이 담기게 됨
    email: "eve.holt@reqres.in",
    password: "pistol",
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
