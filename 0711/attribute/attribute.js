const link = document.querySelector("a");
console.log(link.getAttribute("href"));

// querySelector는 document에 접근함
// getAttribute는 element에서(link) 접근함
// 즉, DOM은 전체를 의미하고, a는 element를 의미한다.

// get // read. 값을 읽는다.
// set // write. 값을 쓴다(세운다).

link.setAttribute("href", "https://www.google.com");
link.innerHTML = "검색은 구글이지";

const msg = document.querySelector("p");
// msg.setAttribute("class", "success");
// msg.setAttribute("style", "color:brown");

// classList
msg.classList.remove("error");
msg.classList.add("success");
console.log(msg);

// event
