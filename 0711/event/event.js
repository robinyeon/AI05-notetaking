// const btn = document.querySelector("button");

// event를 발동 시키기 위해서 맨 처음 해야하는 것은 1. event가 발생했는가 안했는가, 행동을 했는가 안했는가를 브라우저에게 알려줘야 해.
// addEventListener 통해 이벤트가 일어났을 때 반응을 해줘라
// btn.addEventListener("click", (e) => {
//   console.log(e);
//   console.log("주문이 완료되었습니다!");
// });

const orders = document.querySelectorAll("li");

orders.forEach((order) => {
  order.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(order);
    e.target.remove();
    console.log(`${e.target.innerText} 주문이 완료 되었습니다.`);
  });
});

const ul = document.querySelector("ul");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  const li = document.createElement("li");
  li.textContent = "나는 탄산수가 좋아!";
  ul.prepend(li); //배열의 앞에 붙인다.
  ul.append(li); // 배열의 뒤에 붙인다.
});
