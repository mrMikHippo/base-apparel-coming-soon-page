
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var email = document.querySelector("#mail");
var error = document.querySelector("#error-message");


document.querySelector("form").addEventListener("submit", function (e) {
  var test = emailRegExp.test(email.value);
  if (!test) {
    email.classList.add("email-invalid");
    error.innerHTML = "Please provide a valid email";
    e.preventDefault();
  } else {
    email.className = "valid";
    error.innerHTML = "";
  }
  e.preventDefault();
});

email.addEventListener("mousedown", function () {
  email.classList.remove("email-invalid");
  error.innerHTML = "";
});
