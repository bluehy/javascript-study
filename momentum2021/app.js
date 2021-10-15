const loginForm = document.querySelector("#loginForm");
   const loginInput = loginForm.querySelector("input");
   const greeting = document.querySelector("#greetingUser");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// -----------------------------------------------------------

const checkedUsername = localStorage.getItem(USERNAME_KEY);

const paintGreetings = (username) => {
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const onLoginSubmit = (e) => {
   e.preventDefault();
   
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   
   // save & remember Value localStorage
   // key & Value
   // https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
   localStorage.setItem(USERNAME_KEY, username);

   paintGreetings(username);
};


if(checkedUsername === null){
   // show the form
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit",onLoginSubmit);
}else{
   // show the greeting
   paintGreetings(checkedUsername);
}