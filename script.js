// Get references to the HTML elements
const temperatureInput = document.getElementById("temperature");
const inputScaleRadios = document.querySelectorAll(".scale_input.first");
const targetScaleRadios = document.querySelectorAll(".scale_input.second");
const convertButton = document.getElementById("convert");
const resultElement = document.getElementById("result");

// Function to perform temperature conversion
function convertTemperature() {
  // Get the input temperature value
  const inputTemperature = parseFloat(temperatureInput.value);

  // Find the selected input scale
  let inputScale;
  for (const radio of inputScaleRadios) {
    if (radio.checked) {
      inputScale = radio.value;
      break;
    }
  }

  // Find the selected target scale
  let targetScale;
  for (const radio of targetScaleRadios) {
    if (radio.checked) {
      targetScale = radio.value;
      break;
    }
  }

  // Perform the conversion
  let result;
  if (inputScale === targetScale) {
    result = inputTemperature;
  } else if (inputScale === "celsius" && targetScale === "fahrenheit") {
    result = (inputTemperature * 9) / 5 + 32;
  } else if (inputScale === "celsius" && targetScale === "kelvin") {
    result = inputTemperature + 273.15;
  } else if (inputScale === "fahrenheit" && targetScale === "celsius") {
    result = ((inputTemperature - 32) * 5) / 9;
  } else if (inputScale === "fahrenheit" && targetScale === "kelvin") {
    result = ((inputTemperature - 32) * 5) / 9 + 273.15;
  } else if (inputScale === "kelvin" && targetScale === "celsius") {
    result = inputTemperature - 273.15;
  } else if (inputScale === "kelvin" && targetScale === "fahrenheit") {
    result = ((inputTemperature - 273.15) * 9) / 5 + 32;
  }

  // Display the result
  resultElement.textContent = `Converted Temperature: ${result.toFixed(
    2
  )}° ${targetScale}`;
}

// Add click event listener to the "Convert" button
convertButton.addEventListener("click", convertTemperature);
