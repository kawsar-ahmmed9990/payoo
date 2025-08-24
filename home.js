const pin = 1234;
function getInputIntergerValue(id) {
  const inputValue = parseInt(document.getElementById(id).value);
  return inputValue;
}
function getInputStringValue(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}
function getInnerText(id) {
  const innerText = parseInt(document.getElementById(id).innerText);
  return innerText;
}
function setInnerText(id, amount) {
  document.getElementById(id).innerText = amount;
}
// Add money form
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // get add amount from add money form
    const addAmount = getInputIntergerValue("add-amount");
    // get inner text from navbar
    const haveAmount = getInnerText("have-amount");
    // get account number from add money form
    const acountNumber = getInputStringValue("add-amount-acount-number");

    // select bank input validation check
    if (getInputStringValue("add-bank-select") == "") {
      alert("Please select a bank before processing");
      return;
    }

    // Acount number validation check
    if (acountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }
    // get pin number from add money form
    const addAmountPin = getInputIntergerValue("add-amount-pin");

    // pin number validation check
    if (pin !== addAmountPin) {
      alert("Please provide valid pin");
      return;
    }

    // add amount validation check
    if (addAmount > 0) {
      const totalAmount = haveAmount + addAmount;
      setInnerText("have-amount", totalAmount);
      alert("Amount deposited successfully");
    } else {
      alert("Enter the valid amount");
    }
  });
// Withdraw form
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // get withdraw amount from wathdraw form
  const withdrawAmount = getInputIntergerValue("withdraw-amount");
  // get inner text from navbar
  const haveAmount = getInnerText("have-amount");
  // get account number from wathdraw form
  const cashoutAcountNumber = getInputStringValue("cash-out-acount-number");

  // Acount number validation check
  if (cashoutAcountNumber.length < 11) {
    alert("Please provide valid agent number");
    return;
  }

  // get pin number from wathdraw form
  const cashoutPin = getInputIntergerValue("cashout-pin");

  // pin number validation check
  if (pin !== cashoutPin) {
    alert("Please provide valid pin number");
    return;
  }

  // withdraw amount validation check. Is this valid or insufficient or negative number?
  if (withdrawAmount <= haveAmount && withdrawAmount > 0) {
    const totalAmount = haveAmount - withdrawAmount;
    setInnerText("have-amount", totalAmount);
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
  // get transfer amount from transfer form
  const transferAmount = getInputIntergerValue("transfer-amount");

  // get inner text from navbar
  const haveAmount = getInnerText("have-amount");

  // get account number from transfer form
  const transferAcountNumber = getInputStringValue("transfer-account-number");

  // Acount number validation check
  if (transferAcountNumber.length < 11) {
    alert("Please provide valid acount number");
    return;
  }

  // get pin number from transfer form
  const transferPin = getInputIntergerValue("transfer-pin");

  // pin number validation check
  if (pin !== transferPin) {
    alert("Please provide valid pin number");
    return;
  }

  // transfer amount validation check
  if (transferAmount <= haveAmount && transferAmount > 0) {
    const totalAmount = haveAmount - transferAmount;
    setInnerText("have-amount", totalAmount);
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

  // get payable amount from pay bill form
  const payableAmount = getInputIntergerValue("payable-amount");

  // get inner text from navbar
  const haveAmount = getInnerText("have-amount");

  // select bank input validation check
  if (getInputStringValue("pay-bill-select-bank") == "") {
    alert("Please select a bank before processing");
    return;
  }

  // get account number from pay bill form
  const payBillAcountNumber = getInputStringValue("pay-bill-acount-number");

  // Acount number validation check
  if (payBillAcountNumber.length < 11) {
    alert("Please provide valid account number");
    return;
  }

  // get pin number from pay bill form
  const payBillPin = getInputIntergerValue("pay-bill-pin");

  // pin number validation check
  if (pin !== payBillPin) {
    alert("Please provide valid pin");
    return;
  }

  // add amount validation check
  if (payableAmount <= haveAmount && payableAmount > 0) {
    const totalAmount = haveAmount - payableAmount;
    setInnerText("have-amount", totalAmount);
    alert("Successfully paid the amount");
  } else if (payableAmount < 0) {
    alert("Please enter valid amount");
  } else {
    alert("Insufficient balance");
  }
});

function displayBlockNone(id) {
  const forms = document.getElementsByClassName("form");
  for (let form of forms) {
    form.style.display = "none";
  }
  const abc = (document.getElementById(id).style.display = "block");
}

function cardBtnBorderTextColorHighlight(id, id2) {
  const cardBtns = document.getElementsByClassName("card-btn");
  for (let btn of cardBtns) {
    btn.classList.remove("bg-[#0874f20d]");
    btn.classList.add("border-[#0808081a]");
    btn.querySelector("h2").style.color = "#080808b3";
    btn.querySelector("h2").style.fontWeight = "normal";
  }
  document.getElementById(id).classList.remove("border-[#0808081a]");
  document.getElementById(id2).style.color = "#0874f2";
  document.getElementById(id2).style.fontWeight = "bold";
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// Add money card section
document
  .getElementById("add-money-card-btn")
  .addEventListener("click", function () {
    cardBtnBorderTextColorHighlight("add-money-card-btn", "add-text-color");
    // document.getElementById("add-money-card-btn").style.border =
    //   "2px solid #0874f2";
    // document.getElementById("add-text-color").style.color = "#0874f2";
    // document.getElementById("cash-out-card-btn").style.border =
    //   "1px solid #0808081a";
    // document.getElementById("cashout-text-color").style.color = "#080808b3";
    // document.getElementById("transfer-card-btn").style.border =
    //   "1px solid #0808081a";
    // document.getElementById("transfer-text-color").style.color = "#080808b3";
    // document.getElementById("get-bonus-card-btn").style.border =
    //   "1px solid #0808081a";
    // document.getElementById("get-bonus-text-color").style.color = "#080808b3";
    // document.getElementById("pay-bill-card-btn").style.border =
    //   "1px solid #0808081a";
    // document.getElementById("pay-text-color").style.color = "#080808b3";
    // document.getElementById("transactions-card-btn").style.border =
    //   "1px solid #0808081a";
    // document.getElementById("transactions-card-btn").style.color = "#080808b3";
    displayBlockNone("form-one");
  });

// Cash Out card section
document
  .getElementById("cash-out-card-btn")
  .addEventListener("click", function () {
    cardBtnBorderTextColorHighlight("cash-out-card-btn", "cash-out-text-color");
    displayBlockNone("form-two");
  });

// Transfer money card section
document
  .getElementById("transfer-card-btn")
  .addEventListener("click", function () {
    cardBtnBorderTextColorHighlight("transfer-card-btn", "transfer-text-color");

    displayBlockNone("form-three");
  });

// Get bonus card section
document
  .getElementById("get-bonus-card-btn")
  .addEventListener("click", function () {
    cardBtnBorderTextColorHighlight(
      "get-bonus-card-btn",
      "get-bonus-text-color"
    );

    displayBlockNone("form-four");
  });

// Pay bill card section
document
  .getElementById("pay-bill-card-btn")
  .addEventListener("click", function () {
    cardBtnBorderTextColorHighlight("pay-bill-card-btn", "pay-text-color");

    displayBlockNone("form-five");
  });

// transaction card section
document
  .getElementById("transactions-card-btn")
  .addEventListener("click", function () {
    cardBtnBorderTextColorHighlight(
      "transactions-card-btn",
      "transaction-text-color"
    );

    displayBlockNone("form-six");
  });
