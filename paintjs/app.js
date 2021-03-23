// app.js

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("colors__color");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2d";
const CANVAS_SIZE = [1400, 1000];

// default canvas width,height
canvas.width = CANVAS_SIZE[0];
canvas.height = CANVAS_SIZE[1];
// default ctx
ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = "2.5";
ctx.fillStyle = INITIAL_COLOR;


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
   ctx.fillStyle = color;
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

// canvas 클릭 이벤트시, filling 값을 판별해 채우기 기능
function handleCanvasClick(){
   if(filling){
      ctx.fillRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
   }
}


// 이벤트 발생 - 기능
if(canvas){
   canvas.addEventListener("mousemove", onMouseMove)
   canvas.addEventListener("mousedown", startPainting);
   canvas.addEventListener("mouseup", stopPainting);
   canvas.addEventListener("mouseleave", stopPainting);
   canvas.addEventListener("click",handleCanvasClick);
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