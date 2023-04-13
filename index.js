function converterBin2Dec() {
  let binary = document.getElementById("binary").value;
  let decimal = 0;
  let position = 0;

  if (/^[01]+$/.test(binary)) {
    for (let i = binary.length - 1; i >= 0; i--) {
      decimal += parseInt(binary[i]) * Math.pow(2, position);
      position++;
    }
    document.getElementById("results").textContent =
      "The corresponding decimal number is: " + decimal;
  } else {
    document.getElementById("results").textContent =
      "Invalid Input. Enter only 0 and 1.";
  }
}

document
  .getElementById("converter")
  .addEventListener("click", converterBin2Dec);
