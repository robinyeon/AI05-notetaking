// tag, < "h3" >, < "p" >
// const chicken = document.querySelector("p");
//맨 처음의 태그를 인식해서 가져온다
// console.log(chicken); // <p>BBQ</p>

// const bestChicken = document.querySelector(".best");
// console.log(bestChicken); // <p class="best">교촌</p>

// const para = document.querySelector("body > h3");
// console.log(para);

// const checkAll = document.querySelectorAll("p");
// console.log(checkAll); // 길이 4의 배열이 만들어짐

// =============================================
// querySelector vs getElementBy*(Id, Class, Tag)

const chicken = document.getElementById("best");
console.log(chicken);

const best = document.getElementsByClassName("best");
console.log(best);
