const clock = document.querySelector("h2#time");
// ---------------------------------------------

const tickingTime = () => {
   clock.innerText = "clock is here";
   console.log("hello");
}

setInterval(tickingTime, 5000);