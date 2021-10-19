const toDoForm = document.querySelector("#todoList");
const toDoUl = toDoForm.querySelector("#todoUl");

// ==================================================

const handleToDoSubmit = (event) => {
   event.preventDefault();
};

toDoForm.addEventListener("submit",handleToDoSubmit);