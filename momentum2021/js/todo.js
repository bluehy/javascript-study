const toDoForm = document.querySelector("#todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoUl = document.querySelector("#todoUl");

const TODOS_KEY = "todoList";

let toDosArr = [];
// ==================================================

const savedTodo = () => {
   // localStorage.setItem(TODOS_KEY, toDos);
   // array그대로 string형식으로 LocalStorage에 저장하기 위해 JSON.stringify를 사용. 
   // (LS에는 string형태로밖에 저장이 안됨)
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDosArr));
   // string을 JSON.parse를 통해 js object, array로 전환
};

const deleteTodo = (e) => {
   // console.log(e);
   // console.dir(e.target);
   const targetLi = e.target.parentElement;
   // target은 event의 html element 정보를 줌
   // console.log(targetLi);
   targetLi.remove();

   // localStorage에 삭제된 항목을 업데이트하는 단계가 필요.
   // array의 id를 이용해야함.
   console.log(targetLi.id);
   // array는 기본적으로 한 item을 제외하는 게 아니라, 지우고 새 array를 만들어내는 과정으로 update가 이루어진다.
   // array.filter(function) : function결과가 true인 item만으로 구성된 새 array를 return한다
   const removeToDo = (item) => {
      return item.id !== parseInt(targetLi.id);
      // number string은 서로를 다르게 인식 
   };
   toDosArr = toDosArr.filter(removeToDo);
   
   // localStorage에 업데이트
   savedTodo();
};

const paintToDo = (addTodoObj) => {
   // console.log(addTodo);
   const myLi = document.createElement("li");
   const mySpan = document.createElement("span");
   const closeBtn = document.createElement("button");
   
   // add todo list
   myLi.appendChild(mySpan);
   mySpan.innerText = addTodoObj.text;
   myLi.id = addTodoObj.id;

   // add delete button
   closeBtn.innerText = "X";
   myLi.appendChild(closeBtn);
   closeBtn.addEventListener("click", deleteTodo);

   // paint TodoUl
   toDoUl.appendChild(myLi);
};

const handleToDoSubmit = (event) => {
   event.preventDefault();
   const newTodo = toDoInput.value;
   // newTodo에 담은 후, toDoInput의 value를 비우는 것.
   toDoInput.value = "";
   
   // push todos into toDos(localStorage)
   const newTodoObj = {
      id: Date.now(),
      text: newTodo
   }
   toDosArr.push(newTodoObj);
   savedTodo();

   // 입력한 todo 화면에 저장하기
   paintToDo(newTodoObj);
};

// const LoadingList = (item) => {
//    // toDos.push(item);
//    // savedTodo();
//    paintToDo(item);
// }

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
   const parsedTodos = JSON.parse(savedTodos);
   // restore toDos
   toDosArr = parsedTodos;
   // console.log(parsedTodos);
   // array의 각 item에 function실행
   // array.forEach(function);
   parsedTodos.forEach(paintToDo);
};