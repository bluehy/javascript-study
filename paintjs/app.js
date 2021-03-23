// app.js

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("colors__color");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");


// default canvas width,height
canvas.width = 1400;
canvas.height = 1000;
// default ctx
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = "2.5";


//painting 상태 on/off
let painting = false;
let filling = false;

function stopPainting(event){
   painting = false;
}

// 그리기 기능
function startPainting(x, y){
   painting = true;
}

// canvas 위에서의 brush location 파악 + drawing path
function onMouseMove(event){
   const x = event.offsetX * 2;
   const y = event.offsetY * 2;
   if(!painting){
      // creating path
      ctx.beginPath();
      ctx.moveTo(x, y);
   } else {
      // stroke - visible line
      ctx.lineTo(x, y);
      ctx.stroke();
   }
}

// canvas 클릭시 이벤트
// function onMouseDown(event){
//    painting = true;
// }

// change color
function handleColorClick(event){
   const picked = window.getComputedStyle(event.target);
   const color = picked.getPropertyValue('background-color');
   ctx.strokeStyle = color;
   // console.log(picked.getPropertyValue('background-color'));
}

// change brush size - lineWidth
function handleRangeChange(event){
   const size = event.target.value;
   ctx.lineWidth = size;
}

// painting mode fill<->paint
function handleModeClick(){
   if(filling === true){
      filling = false;
      mode.innerText = "Fill";
   }else{
      filling = true;
      mode.innerText = "Paint";
   }
}

// 이벤트 발생 - 기능
if(canvas){
   canvas.addEventListener("mousemove", onMouseMove)
   canvas.addEventListener("mousedown", startPainting);
   canvas.addEventListener("mouseup", stopPainting);
   canvas.addEventListener("mouseleave", stopPainting);
}

// 색상 팔레트 클릭 이벤트
Array.from(colors).forEach(item => item.addEventListener("click", handleColorClick));

// range input 이벤트
if(range) {
   range.addEventListener("input", handleRangeChange);
}

// fill/save 버튼 이벤트
if(mode){
   mode.addEventListener("click",handleModeClick);
}