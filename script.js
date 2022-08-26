const calculateBtn = document.querySelector("#calculate");

calculateBtn.addEventListener("click", runCalculation);

function runCalculation() {
  console.log(document.querySelector("#firstnumber").value);
  console.log(document.querySelector("#operator").value);
  console.log(document.querySelector("#secondnumber").value);
  console.log(document.querySelector("#doround").value);
  console.log(document.querySelector("#decimals").value);
}
