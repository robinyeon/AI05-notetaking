// fetch()는 프로미스 객체를 반환한다.

fetch("jsondata/musclemon.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// sandbox2의 getJson안의 모든 내용이 fetch에 들어가(숨겨져)있다는 것을 반드시 인지하기.
