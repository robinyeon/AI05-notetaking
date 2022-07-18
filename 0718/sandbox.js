const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    // request.status === 200 정상적으로 수행이 완료되었습니다 라는 의미
    // 코드가 정상 수행 되었을 때의 구간
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    // 코드가 오류 났을 때 실행 되는 구간: 404 etc.
    console.log("요청하신 내용을 찾을 수 없습니다.");
  }
});

//request 클라이언트의 요청, response 서버의 응답

request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
// GET은 통신방법, 뒤는 endpoint 주소
// http 통신 규약에 의하면 통신 방법은 4가지로 나뉜다.
// 1. GET
// 2. POST
// 3. PUT (update, patch)
// 4. DELETE
// => CRUD

request.send(); // 2, 위의 것이 준비됐으니 서버로 전송을 하겠다!
// 이후엔 서버의 일

// port: 통신을 하기 위한 일종의 전기 콘센트 같은 느낌
