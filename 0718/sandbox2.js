const getJson = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("!실패!");
      }
    });

    request.open("GET", resource);
    request.send();
  });
  // Promise 자체에 내부적으로 박혀있는 resolve(성공했을때. 그 이후에 .then으로 뭔가 진행)와 reject(실패). 의미를 굳이 알 필요는 없다.
  // 결과 반환이 아닌 어떤 시점에 결과를 제공하겠다는 약속을 반환. (실무에서 익숙해질테니 워딩에 집착하지 않기)
  // 통신의 일반적인 상태(pending, fulfilled, rejected)
};

getJson("jsondata/musclemon.json")
  .then((result) => {
    console.log("promise 1: " + result);
    return getJson("jsondata/pikachu.json");
  })
  .then((result) => {
    console.log("promise 2: " + result);
    return getJson("jsondata/jamanbo.json");
  })
  .then((result) => {
    console.log("promise 3: " + result);
  })
  .catch((err) => {
    console.log("rejected: " + err);
  });

// getJson("jsondata/musclemon.json", (err, data) => {
//   console.log(data);
//   getJson("jsondata/pikachu.json", (err, data) => {
//     console.log(data);
//     getJson("jsondata/jamanbo.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });
// 순차적으로 출력하기 위해 이와 같은 콜백지옥 진행. 하지만 유지보수 등 힘든점이 다수 있음. 이를 피하기 위해 Promise, async/await 사용.
// 밑의 코드는 Promise 활용:

// getJson((err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });
