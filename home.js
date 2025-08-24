const pin = 1234;
// Add money form
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
    const acountNumber = document.getElementById(
      "add-amount-acount-number"
    ).value;
    if (document.getElementById("add-bank-select").value == "") {
      alert("Please select a bank before processing");
      return;
    }
    if (acountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }
    const addAmountPin = parseInt(
      document.getElementById("add-amount-pin").value
    );

    if (pin !== addAmountPin) {
      alert("Please provide valid pin");
      return;
    }
    if (addAmount > 0) {
      const totalAmount = haveAmount + addAmount;
      document.getElementById("have-amount").innerText = totalAmount;
      alert("Amount deposited successfully");
    } else {
      alert("Enter the valid amount");
    }
  });
// Withdraw form
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("btn clicked");
  const withdrawAmount = parseInt(
    document.getElementById("withdraw-amount").value
  );
  const haveAmount = parseInt(document.getElementById("have-amount").innerText);
  // console.log(addAmount, haveAmount);
  const cashoutAcountNumber = document.getElementById(
    "cash-out-acount-number"
  ).value;
  if (cashoutAcountNumber.length < 11) {
    alert("Please provide valid agent number");
    return;
  }
  const cashoutPin = parseInt(document.getElementById("cashout-pin").value);
  if (pin !== cashoutPin) {
    alert("Please provide valid pin number");
    return;
  }
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
// Amount transfer form
document.getElementById("transfer-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("btn clicked");
  const transferAmount = parseInt(
    document.getElementById("transfer-amount").value
  );
  const haveAmount = parseInt(document.getElementById("have-amount").innerText);
  // console.log(addAmount, haveAmount);
  const transferAcountNumber = document.getElementById(
    "transfer-account-number"
  ).value;
  if (transferAcountNumber.length < 11) {
    alert("Please provide valid acount number");
    return;
  }
  const transferPin = parseInt(document.getElementById("transfer-pin").value);
  if (pin !== transferPin) {
    alert("Please provide valid pin number");
    return;
  }
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
// Pay bill form
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("btn clicked");
  const payableAmount = parseInt(
    document.getElementById("payable-amount").value
  );
  const haveAmount = parseInt(document.getElementById("have-amount").innerText);
  // console.log(addAmount, haveAmount);
  if (document.getElementById("pay-bill-select-bank").value == "") {
    alert("Please select a bank before processing");
    return;
  }
  const payBillAcountNumber = document.getElementById(
    "pay-bill-acount-number"
  ).value;
  if (payBillAcountNumber.length < 11) {
    alert("Please provide valid account number");
    return;
  }
  const payBillPin = parseInt(document.getElementById("pay-bill-pin").value);

  if (pin !== payBillPin) {
    alert("Please provide valid pin");
    return;
  }
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
// Add money card section
document
  .getElementById("add-money-card-btn")
  .addEventListener("click", function () {
    // console.log("Clicked");
    document.getElementById("add-money-card-btn").style.border =
      "2px solid #0874f2";
    document.getElementById("add-text-color").style.color = "#0874f2";
    document.getElementById("cash-out-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("cashout-text-color").style.color = "#080808b3";
    document.getElementById("transfer-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("transfer-text-color").style.color = "#080808b3";
    document.getElementById("get-bonus-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("get-bonus-text-color").style.color = "#080808b3";
    document.getElementById("pay-bill-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("pay-text-color").style.color = "#080808b3";
    document.getElementById("form-one").style.display = "block";
    document.getElementById("form-two").style.display = "none";
    document.getElementById("form-three").style.display = "none";
    document.getElementById("form-four").style.display = "none";
    document.getElementById("form-five").style.display = "none";
  });
// Cash Out card section
document
  .getElementById("cash-out-card-btn")
  .addEventListener("click", function () {
    // console.log("Clicked");
    document.getElementById("cash-out-card-btn").style.border =
      "2px solid #0874f2";
    document.getElementById("cashout-text-color").style.color = "#0874f2";
    document.getElementById("add-money-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("add-text-color").style.color = "#080808b3";
    document.getElementById("transfer-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("transfer-text-color").style.color = "#080808b3";
    document.getElementById("get-bonus-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("get-bonus-text-color").style.color = "#080808b3";
    document.getElementById("pay-bill-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("pay-text-color").style.color = "#080808b3";
    document.getElementById("form-one").style.display = "none";
    document.getElementById("form-two").style.display = "block";
    document.getElementById("form-three").style.display = "none";
    document.getElementById("form-four").style.display = "none";
    document.getElementById("form-five").style.display = "none";
  });
// Transfer money card section
document
  .getElementById("transfer-card-btn")
  .addEventListener("click", function () {
    // console.log("Clicked");
    document.getElementById("transfer-card-btn").style.border =
      "2px solid #0874f2";
    document.getElementById("transfer-text-color").style.color = "#0874f2";
    document.getElementById("add-money-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("add-text-color").style.color = "#080808b3";
    document.getElementById("cash-out-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("cashout-text-color").style.color = "#080808b3";
    document.getElementById("get-bonus-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("get-bonus-text-color").style.color = "#080808b3";
    document.getElementById("pay-bill-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("pay-text-color").style.color = "#080808b3";
    document.getElementById("form-one").style.display = "none";
    document.getElementById("form-two").style.display = "none";
    document.getElementById("form-three").style.display = "block";
    document.getElementById("form-four").style.display = "none";
    document.getElementById("form-five").style.display = "none";
  });
// Get bonus card section
document
  .getElementById("get-bonus-card-btn")
  .addEventListener("click", function () {
    // console.log("Clicked");
    document.getElementById("get-bonus-card-btn").style.border =
      "2px solid #0874f2";
    document.getElementById("get-bonus-text-color").style.color = "#0874f2";
    document.getElementById("add-money-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("add-text-color").style.color = "#080808b3";
    document.getElementById("cash-out-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("cashout-text-color").style.color = "#080808b3";
    document.getElementById("transfer-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("transfer-text-color").style.color = "#080808b3";
    document.getElementById("pay-bill-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("pay-text-color").style.color = "#080808b3";
    document.getElementById("form-one").style.display = "none";
    document.getElementById("form-two").style.display = "none";
    document.getElementById("form-three").style.display = "none";
    document.getElementById("form-four").style.display = "block";
    document.getElementById("form-five").style.display = "none";
  });
// Pay bill card section
document
  .getElementById("pay-bill-card-btn")
  .addEventListener("click", function () {
    // console.log("Clicked");
    document.getElementById("pay-bill-card-btn").style.border =
      "2px solid #0874f2";
    document.getElementById("pay-text-color").style.color = "#0874f2";
    document.getElementById("add-money-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("add-text-color").style.color = "#080808b3";
    document.getElementById("cash-out-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("cashout-text-color").style.color = "#080808b3";
    document.getElementById("transfer-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("transfer-text-color").style.color = "#080808b3";
    document.getElementById("get-bonus-card-btn").style.border =
      "1px solid #0808081a";
    document.getElementById("get-bonus-text-color").style.color = "#080808b3";
    document.getElementById("form-one").style.display = "none";
    document.getElementById("form-two").style.display = "none";
    document.getElementById("form-three").style.display = "none";
    document.getElementById("form-four").style.display = "none";
    document.getElementById("form-five").style.display = "block";
  });
