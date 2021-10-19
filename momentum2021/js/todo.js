const toDoForm = document.querySelector("#todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoUl = document.querySelector("#todoUl");

const savedTodos = [];
// ==================================================

const savedTodo = () => {
   localStorage.setItem("todoList", savedTodos);
}

const deleteTodo = (e) => {
   // console.log(e);
   // console.dir(e.target);
   const targetLi = e.target.parentElement;
   // target은 event의 html element 정보를 줌
   // console.log(targetLi);
   targetLi.remove();
}

const paintToDo = (addTodo) => {
   // console.log(addTodo);
   const myLi = document.createElement("li");
   const mySpan = document.createElement("span");
   const closeBtn = document.createElement("button");
   
   // add todo list
   myLi.appendChild(mySpan);
   mySpan.innerText = `${addTodo}`;

   // add delete button
   closeBtn.innerText = "X";
   myLi.appendChild(closeBtn);
   closeBtn.addEventListener("click", deleteTodo);

   // paint TodoUl
   toDoUl.appendChild(myLi);
}


const handleToDoSubmit = (event) => {
   event.preventDefault();
   const newTodo = toDoInput.value;
   // newTodo에 담은 후, toDoInput의 value를 비우는 것.
   toDoInput.value = "";
   
   // push todos into savedTodos(localStorage)
   savedTodos.push(newTodo);
   // console.log(savedTodos);
   savedTodo();

   // 입력한 todo 화면에 저장하기
   paintToDo(newTodo);
};

toDoForm.addEventListener("submit",handleToDoSubmit);