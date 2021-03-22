// app.js

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

// default canvas width,height
canvas.width = 1400;
canvas.height = 1000;
// default ctx
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = "2.5";


//painting 상태 on/off
let painting = false;

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
      ctx.beginPath();
      ctx.moveTo(x, y);
   } else {
      ctx.lineTo(x, y);
      ctx.stroke();
   }
}

// canvas 클릭시 이벤트
function onMouseDown(event){
   painting = true;
}

if(canvas){
   canvas.addEventListener("mousemove", onMouseMove)
   canvas.addEventListener("mousedown", startPainting);
   canvas.addEventListener("mouseup", stopPainting);
   canvas.addEventListener("mouseleave", stopPainting);
}