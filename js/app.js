const form = document.querySelector("#loan-form");

form.addEventListener("submit", results);
const output = document.querySelector("#output");
output.style.display = "none";

function results(e) {
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const years = document.querySelector("#years");
  const cardBody = document.querySelector(".card-body");
  const monthlyPayment = document.querySelector("#monthly-payment");
  const total = document.querySelector("#total-payment");
  const interestRate = document.querySelector("#total-interest");

  if (amount.value != "" && interest.value != "" && years.value != "") {
    monthlyPayment.value = (
      amount.value / years.value +
      amount.value * (interest.value / 100)
    ).toFixed(2);
    total.value = (
      (amount.value / years.value + amount.value * (interest.value / 100)) *
      years.value
    ).toFixed(2);
    interestRate.value = (
      (amount.value / years.value + amount.value * (interest.value / 100)) *
        years.value -
      amount.value
    ).toFixed(2);
    const loader = document.querySelector("#loader");

    loader.style.display = "inline-block";
    setTimeout(() => {
      loader.style.display = "none";
      output.style.display = "block";
    }, 2000);
  } else {
    const loader = (document.querySelector("#loader").style.display =
      "inline-block");
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000);
    output.style.display = "none";
    const error = document.createElement("div");
    error.style.display = "block";
    error.style.backgroundColor = "#FFB5B5";
    error.style.border = "4px solid #9B0000";
    error.innerText = "Заполните все поля !";
    error.style.color = "#A13333";
    cardBody.appendChild(error);
  }
  e.preventDefault();
}
