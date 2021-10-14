const loginForm = document.querySelector("#loginForm");
// querySelector로는 id, class 모두 찾아낼 수 있기 때문에 id,class구분을 해줘야한다.
// = const loginForm = document.getElementById("loginForm");
   const loginInput = loginForm.querySelector("input");
   // const loinInput = document.querySelector("#loginForm input"); 도 가능.
   // const loginButton = loginForm.querySelector("button");
   const link = document.querySelector("a");

const onLoginSubmit = (e) => {
   e.preventDefault();
   const username = loginInput.value;
   loginForm.classList.add("hidden");
   console.log(username);
};

loginForm.addEventListener("submit", onLoginSubmit);