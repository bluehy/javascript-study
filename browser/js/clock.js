// clock.js
// const clockContainerA = document.getElementsByClassName("js-clock");
// const clockTitleA = document.getElementsByClassName("js-time");
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
// console.log(clockTitleA);
// console.log(clockTitle);

function getTime(){
   const date = new Date();
   const minutes = date.getMinutes();
   const hours = date.getHours();
   const seconds = date.getSeconds();
   // 삼항연산자
   clockTitle.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
   // setInterval(fn, time)
   getTime();
   setInterval(getTime, 1000);
}

init();