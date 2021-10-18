const clock = document.querySelector("h2#time");
// ---------------------------------------------

const tickingTime = () => {
   const date = new Date();
   const hours = String(date.getHours()).padStart(2,"0");
   // getHours() = number. padStart를 사용하려면 String으로 바꿔주어야함.
   const min = String(date.getMinutes()).padStart(2,"0");
   const sec = String(date.getSeconds()).padStart(2,"0");
   // clock.innerText = `${date.getHours() ? `0${date.getHours()}`: `${date.getHours()}`}:${date.getMinutes() < 10 ? `0${date.getMinutes()}`:`${date.getMinutes()}`}:${date.getSeconds() < 10 ? `0${date.getSeconds()}`: `${date.getSeconds()}`}`;
   // padStart(maxLength, fillString) : 앞에 String을 채워줌
   // padEnd(maxLength, fillString) : 뒤에 String을 채워줌
   clock.innerText = `${hours} : ${min} : ${sec}`;
}

tickingTime();
setInterval(tickingTime,500);
// setInterval(tickingTime, 5000);
// 5초마다 실행
// setTimeout(tickingTime, 5000);
// 5초 후 한번 실행

// const date = new Date();
// date.getDay();
// // 요일
// date.getFullYear();
// // 년도
// date.getHours();
// // 시
// date.getMinutes();
// // 분
// date.getSeconds();
// 초