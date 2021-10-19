const toDoForm = document.querySelector("#todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoUl = document.querySelector("#todoUl");


// ==================================================

const paintToDo = (savedTodo) => {
   // console.log(savedTodo);
   const myLi = document.createElement("li");
   const mySpan = document.createElement("span");
   myLi.appendChild(mySpan);
   mySpan.innerText = `${savedTodo}`;
   toDoUl.appendChild(myLi);
}


const handleToDoSubmit = (event) => {
   event.preventDefault();
   const newTodo = toDoInput.value;
   // newTodo에 담은 후, toDoInput의 value를 비우는 것.
   toDoInput.value = "";
   
   // 입력한 todo 화면에 저장하기
   paintToDo(newTodo);
};

toDoForm.addEventListener("submit",handleToDoSubmit);