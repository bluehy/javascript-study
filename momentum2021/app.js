const loginForm = document.querySelector("#loginForm");
   const loginInput = loginForm.querySelector("input");
   const greeting = document.querySelector("#greetingUser");

const HIDDEN_CLASSNAME = "hidden";
// -----------------------------------------------------------

const onLoginSubmit = (e) => {
   e.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   
   // save & remember Value localStorage
   // key & Value
   // https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
   localStorage.setItem("username", username);
   
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", onLoginSubmit);