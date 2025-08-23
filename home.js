document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("btn clicked");
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const haveAmount = parseInt(
      document.getElementById("have-amount").innerText
    );
    // console.log(addAmount, haveAmount);
    if (addAmount > 0) {
      const totalAmount = haveAmount + addAmount;
      document.getElementById("have-amount").innerText = totalAmount;
    }
  });
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("btn clicked");
  const withdrawAmount = parseInt(
    document.getElementById("withdraw-amount").value
  );
  const haveAmount = parseInt(document.getElementById("have-amount").innerText);
  // console.log(addAmount, haveAmount);
  if (withdrawAmount <= haveAmount && withdrawAmount > 0) {
    const totalAmount = haveAmount - withdrawAmount;
    document.getElementById("have-amount").innerText = totalAmount;
    alert("Successfully withdraw the amount");
  } else if (withdrawAmount < 0) {
    alert("Please enter valid amount");
  } else {
    alert("Insufficient balance");
  }
});
document.getElementById("transfer-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("btn clicked");
  const transferAmount = parseInt(
    document.getElementById("transfer-amount").value
  );
  const haveAmount = parseInt(document.getElementById("have-amount").innerText);
  // console.log(addAmount, haveAmount);
  if (transferAmount <= haveAmount && transferAmount > 0) {
    const totalAmount = haveAmount - transferAmount;
    document.getElementById("have-amount").innerText = totalAmount;
    alert("Successfully transfer the amount");
  } else if (transferAmount < 0) {
    alert("Please enter valid amount");
  } else {
    alert("Insufficient balance");
  }
});
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("btn clicked");
  const payableAmount = parseInt(
    document.getElementById("payable-amount").value
  );
  const haveAmount = parseInt(document.getElementById("have-amount").innerText);
  // console.log(addAmount, haveAmount);
  if (payableAmount <= haveAmount && payableAmount > 0) {
    const totalAmount = haveAmount - payableAmount;
    document.getElementById("have-amount").innerText = totalAmount;
    alert("Successfully paid the amount");
  } else if (payableAmount < 0) {
    alert("Please enter valid amount");
  } else {
    alert("Insufficient balance");
  }
});
document
  .getElementById("add-money-card-btn")
  .addEventListener("click", function () {
    // console.log("Clicked");
    document.getElementById("form-one").style.display = "block";
    document.getElementById("form-two").style.display = "none";
    document.getElementById("form-three").style.display = "none";
    document.getElementById("form-four").style.display = "none";
    document.getElementById("form-five").style.display = "none";
  });
document
  .getElementById("add-money-card-btn")
  .addEventListener("click", function () {
    // console.log("Clicked");
    document.getElementById("form-one").style.display = "block";
    document.getElementById("form-two").style.display = "none";
    document.getElementById("form-three").style.display = "none";
    document.getElementById("form-four").style.display = "none";
    document.getElementById("form-five").style.display = "none";
  });
document
  .getElementById("cash-out-card-btn")
  .addEventListener("click", function () {
    // console.log("Clicked");
    document.getElementById("form-one").style.display = "none";
    document.getElementById("form-two").style.display = "block";
    document.getElementById("form-three").style.display = "none";
    document.getElementById("form-four").style.display = "none";
    document.getElementById("form-five").style.display = "none";
  });
document
  .getElementById("transfer-card-btn")
  .addEventListener("click", function () {
    // console.log("Clicked");
    document.getElementById("form-one").style.display = "none";
    document.getElementById("form-two").style.display = "none";
    document.getElementById("form-three").style.display = "block";
    document.getElementById("form-four").style.display = "none";
    document.getElementById("form-five").style.display = "none";
  });
document
  .getElementById("get-bonus-card-btn")
  .addEventListener("click", function () {
    // console.log("Clicked");
    document.getElementById("form-one").style.display = "none";
    document.getElementById("form-two").style.display = "none";
    document.getElementById("form-three").style.display = "none";
    document.getElementById("form-four").style.display = "block";
    document.getElementById("form-five").style.display = "none";
  });
document
  .getElementById("pay-bill-card-btn")
  .addEventListener("click", function () {
    // console.log("Clicked");
    document.getElementById("form-one").style.display = "none";
    document.getElementById("form-two").style.display = "none";
    document.getElementById("form-three").style.display = "none";
    document.getElementById("form-four").style.display = "none";
    document.getElementById("form-five").style.display = "block";
  });
