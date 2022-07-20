// async await 훨씬 더 많이 사용: promise chain이 생각보다 내 의도만치 돌아가지 않는다. 압도적인 code 실행 컨트롤.
const getPoketmons = async () => {
  // **Promise 형태로 반환된다.**
  const response = await fetch("./jsondata/pikachu.json");
  // response에 결과가 담기기 전까지는 아래의 코드가 실행되지 않는다.
  console.log(response); // 결과 object(json형태가 아닌)

  if (response.status !== 200) {
    throw new Error("통신 주소값을 찾을 수 없습니다."); // reject쪽으로 들어가게 됨
  }

  const data = await response.json();
  return data;
};

getPoketmons()
  .then((data) => console.log("resolve: ", data))
  .catch((err) => console.log("rejected: ", err));

// 파일(pikachu.json)이 망가졌을 때에는 status 200, 엔드포인트 주소가 망가졌을 때에는 status 404(url주소를 찾을 수 없다는 의미)

// ===========================================================

// promise chain
// fetch()는 프로미스 객체를 반환한다.
// fetch("jsondata/musclemon.json")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// sandbox2의 getJson안의 모든 내용이 fetch에 들어가(숨겨져)있다는 것을 반드시 인지하기.
