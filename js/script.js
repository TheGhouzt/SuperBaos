function sumar() {
  let num1 = document.getElementById("n1").value;
  let num2 = document.getElementById("n2").value;
  let sum = parseFloat(num1) + parseFloat(num2);
  console.log(sum);
  document.getElementById("resultado").innerHTML = ("El resultado es: " + sum);
}

function restar() {
  let num1 = document.getElementById("n1").value;
  let num2 = document.getElementById("n2").value;
  let res = parseFloat(num1) - parseFloat(num2);
  console.log(res);
  document.getElementById("resultado").innerHTML = ("El resultado es: " + res);
}