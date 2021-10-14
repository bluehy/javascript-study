const loginForm = document.querySelector("#loginForm");
   const loginInput = loginForm.querySelector("input");
   const greeting = document.querySelector("#greetingUser");

const HIDDEN_CLASSNAME = "hidden";
// -----------------------------------------------------------

const onLoginSubmit = (e) => {
   e.preventDefault();
   const username = loginInput.value;
   loginForm.classList.add(HIDDEN_CLASSNAME);
   console.log(username);
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", onLoginSubmit);