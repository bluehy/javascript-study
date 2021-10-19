const toDoForm = document.querySelector("#todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoUl = document.querySelector("#todoUl");

const TODOS_KEY = "todoList";

const toDos = [];
// ==================================================

const savedTodo = () => {
   // localStorage.setItem(TODOS_KEY, toDos);
   // array그대로 string형식으로 LocalStorage에 저장하기 위해 JSON.stringify를 사용. 
   // (LS에는 string형태로밖에 저장이 안됨)
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
   // string을 JSON.parse를 통해 js object, array로 전환
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
   
   // push todos into toDos(localStorage)
   toDos.push(newTodo);
   // console.log(toDos);
   savedTodo();

   // 입력한 todo 화면에 저장하기
   paintToDo(newTodo);
};

const LoadingList = (item) => {
   toDos.push(item);
   savedTodo();
   paintToDo(item);
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos !== null) {
   const parsedTodos = JSON.parse(savedTodos);
   // console.log(parsedTodos);
   // array의 각 item에 function실행
   // array.forEach(function);
   parsedTodos.forEach(LoadingList);

};