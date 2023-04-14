function converterBin2Dec() {
  let binary = document.getElementById("binary").value;
  let decimal = 0;
  let position = 0;

  // check if the input contains only 0s and 1s
  if (/^[01]+$/.test(binary)) {
    // loop through the binary digits and convert to decimal
    for (let i = binary.length - 1; i >= 0; i--) {
      decimal += parseInt(binary[i]) * Math.pow(2, position);
      position++;
    }
    // display the decimal result
    document.getElementById("results").textContent =
      "The corresponding decimal number is: " + decimal;
  } else {
    // display an error message if the input is not binary
    document.getElementById("results").textContent =
      "Invalid Input. Enter only 0 and 1.";
  }
}

document
  .getElementById("converter")
  .addEventListener("click", converterBin2Dec);
