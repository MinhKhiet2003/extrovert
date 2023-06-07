const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
const onClickLogin = () => {
  const username = document.getElementById("userLogin");
  const password = document.getElementById("passwordLogin");

  if (username.value == localStorage.getItem('user') && password.value == localStorage.getItem('pass') ) {
    window.location.href = "../main-index.html";
    var nameeeeee = document.getElementsByClassName('nameeeeee')
    nameeeeee.innerText = localStorage.getItem('user');
    return false;
  }

   return alert("sai thông tin đăng nhập, vui lòng đăng nhập lại ");
};
var submitLogin = document.getElementById("login-btn");
submitLogin.onclick = onClickLogin;
var submit = document.getElementById("sign-upbtn");

submit.onclick = function () {
  const user = document.getElementById("user");
  const pass = document.getElementById("pass");
  var flag = false;
  if (user.value.length > 6 && pass.value.length > 6) {
    flag = true;
  }
  if (flag == true) {
    user_data = user.value;
    localStorage.setItem("user", user_data);

    pass_data = pass.value;
    localStorage.setItem("pass", pass_data);
    alert("Bạn đã Đăng ký thành công");
    window.location = "index.html";
  } else {
    alert(" Bạn đã Đăng ký ko thành công");
  }
};

