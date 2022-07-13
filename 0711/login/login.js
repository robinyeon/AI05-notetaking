const form = document.querySelector(".login-form");
const feedback = document.querySelector(".feedback");

// 정규표현식: 영문자 6~12글자 사이
const regexp = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // 화면 전환(새로고침)을 막아준다.

  console.log(form.username);
  const username = form.username.value;

  if (regexp.test(username)) {
    feedback.textContent = "환영합니다 :)";
  } else {
    feedback.textContent = "영문 6~12자로 적어주세요 :(";
  }
});

// form.username.addEventListener("keyup", (e) => {
//   console.log(e);
//   if (regexp.test(e.target.value)) {
//     feedback.textContent = "환영합니다 :)";
//   } else {
//     feedback.textContent = "영문 6~12자로 적어주세요 :(";
//   }
// });
