// Function to display selected value
function displaySelectedValue() {
  const selectedValue = localStorage.getItem("selectedValue");

  const displayElement = document.getElementById("selected-value");
  displayElement.textContent = `You selected: ${selectedValue}`;
}