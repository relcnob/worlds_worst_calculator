const calculateBtn = document.querySelector("#calculate");
const resultList = document.querySelector("#results");

calculateBtn.addEventListener("click", runCalculation);

function runCalculation() {
  let firstNumber = document.querySelector("#firstnumber").value;
  let secondNumber = document.querySelector("#secondnumber").value;
  let operator = document.querySelector("#operator").value;
  let doRounding = document.querySelector("#doround").checked;
  let decimals = document.querySelector("#decimals").value;
  let outcome;

  // check for operator
  if (operator == "add") {
    outcome = Number(firstNumber) + Number(secondNumber);
    setValue(outcome);
  } else if (operator == "sub") {
    outcome = Number(firstNumber) - Number(secondNumber);
    setValue(outcome);
  } else if (operator == "mul") {
    outcome = Number(firstNumber) * Number(secondNumber);
    setValue(outcome);
  } else if (operator == "div") {
    outcome = Number(firstNumber) / Number(secondNumber);
    setValue(outcome);
  }
  function setValue(e) {
    if ((doRounding = "true")) {
      document.querySelector("#firstnumber").value = e.toFixed(decimals);
      document.querySelector("#secondnumber").value = "";
    } else {
      document.querySelector("#firstnumber").value = e;
      document.querySelector("#secondnumber").value = "";
    }
  }
}
