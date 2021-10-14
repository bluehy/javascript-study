const loginForm = document.querySelector("#loginForm");
// querySelector로는 id, class 모두 찾아낼 수 있기 때문에 id,class구분을 해줘야한다.
// = const loginForm = document.getElementById("loginForm");
   const loginInput = loginForm.querySelector("input");
   // const loinInput = document.querySelector("#loginForm input"); 도 가능.
   // const loginButton = loginForm.querySelector("button");


const onLoginSubmit = () => {
   // console.dir(loginInput);
   // // input의 내용이 object형식으로 출력
   // console.log(loginInput.value);
   // console.log("click!");
   event.preventDefault();
   // 기본 동작을 prevent하는 방법.

   const username = loginInput.value;
   if(username === "") {
      alert("이름을 입력해주세요.");
   }else if(username.length > 15) {
      alert(`이름이 너무 깁니다. 15자 미만으로 설정해주세요. (현재 글자수 : ${username.length}자)`)
   }
   // 유효성 검사 :: only JS 
};

// loginButton.addEventListener("click",handleBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);