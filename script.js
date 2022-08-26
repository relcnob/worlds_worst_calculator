const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");
const resultList = document.querySelector("#results");

calculateBtn.addEventListener("click", runCalculation);
clearBtn.addEventListener("click", clearList);

function runCalculation() {
  let firstNumber = document.querySelector("#firstnumber").value;
  let secondNumber = document.querySelector("#secondnumber").value;
  let operator = document.querySelector("#operator").value;
  let decimals = document.querySelector("#decimals").value;
  let doRounding = document.querySelector("#doround").checked;
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
  function setValue(outcome) {
    if (doRounding == true) {
      outcome = outcome.toFixed(decimals);
      addToResults(outcome);
    } else {
      addToResults(outcome);
    }
    function addToResults(number) {
      const listElement = document.createElement("li");
      document.querySelector("#secondnumber").value = "";
      document.querySelector("#firstnumber").value = number;
      listElement.textContent = number;
      resultList.appendChild(listElement);
    }
  }
}

function clearList() {
  resultList.innerHTML = "";
}
