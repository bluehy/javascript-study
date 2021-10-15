const clock = document.querySelector("h2#time");
// ---------------------------------------------

const tickingTime = () => {
   clock.innerText = "clock is here";
   console.log("hello");
}

// setInterval(tickingTime, 5000);
// 5초마다 실행
// setTimeout(tickingTime, 5000);
// 5초 후 한번 실행

const date = new Date();
date.getDay();
// 요일
date.getFullYear();
// 년도
date.getHours();
// 시
date.getMinutes();
// 분
date.getSeconds();
// 초