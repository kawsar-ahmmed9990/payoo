const number = 12345678910;
const pin = 1234;
document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log("Login button clicked");
  const inputNumber = parseInt(
    document.getElementById("login-input-number").value
  );
  const inputPin = parseInt(document.getElementById("login-input-pin").value);
  //   console.log(inputNumber, inputPin);
  if (number === inputNumber && pin === inputPin) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid credentials");
  }
});
