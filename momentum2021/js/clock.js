const clock = document.querySelector("h2#time");
// ---------------------------------------------

const tickingTime = () => {
   const date = new Date();
   clock.innerText = `${date.getHours() ? `0${date.getHours()}`: `${date.getHours()}`}:${date.getMinutes() < 10 ? `0${date.getMinutes()}`:`${date.getMinutes()}`}:${date.getSeconds() < 10 ? `0${date.getSeconds()}`: `${date.getSeconds()}`}`;
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