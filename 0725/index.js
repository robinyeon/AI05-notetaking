// const my_req = require("./jsReferenceType");

// console.log(my_req);

// console.log(global);

// console.time("timer");

// setTimeout((cb) => {
//   console.log("Hello Laphoo🫧");
// }, 1000);

// console.timeEnd("timer");

// const process = require("process");
// console.log(process.env);
// 특히 SECRET_KEY 설정할때 사용한다

// console.log(process.cwd());

// console.log(process.env.PORT || 3000);
// "env.PORT가 없으면 3000 써라" 라는 뜻

const fs = require("fs");
// console.log(fs);

const content1 = fs.readFileSync("readme.txt", {
  encoding: null,
});

const content2 = fs.readFileSync("readme.txt", {
  encoding: "utf-8",
  flag: "r",
});

console.log(content1);
console.log(content2);

// const time = setTimeout((callback) => {
//   console.log("hello world");
// }, 1000);

// module.exports = { time };
