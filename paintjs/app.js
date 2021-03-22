// app.js

const canvas = document.getElementById("jsCanvas");


//painting 기능
let painting = false;

function stopPainting(event){
   painting = false;
}

// canvas 위에서의 brush location 파악
function onMouseMove(event){
   const x = event.offsetX;
   const y = event.offsetY;
}

// canvas 클릭
function onMouseDown(event){
   painting = true;   
}

// canvas 클릭 X
function onMouseUp(event){
   stopPainting();
}

if(canvas){
   canvas.addEventListener("mousemove", onMouseMove)
   canvas.addEventListener("mousedown", onMouseDown);
   canvas.addEventListener("mouseup", onMouseUp);
   canvas.addEventListener("mouseleave", stopPainting);
}