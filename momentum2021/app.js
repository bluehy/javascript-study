const loginForm = document.querySelector("#loginForm");
// querySelector로는 id, class 모두 찾아낼 수 있기 때문에 id,class구분을 해줘야한다.
// = const loginForm = document.getElementById("loginForm");
   const loginInput = loginForm.querySelector("input");
   // const loinInput = document.querySelector("#loginForm input"); 도 가능.
   const loginButton = loginForm.querySelector("button");


const handleBtnClick = () => {
   console.dir(loginInput);
   // input의 내용이 object형식으로 출력
   console.log(loginInput.value);
   console.log("click!");
};

loginButton.addEventListener("click",handleBtnClick)