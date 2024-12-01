let currentTab = 0; // Initialize current tab to the first tab (0) 
showTab(currentTab); // Display the current tab

function showTab(n) {
  const tabs = document.getElementsByClassName("tab");
  tabs[n].style.display = "block"; // Show the specified tab

  // Update Previous/Next buttons visibility and text
  document.getElementById("prevBtn").style.display = n === 0 ? "none" : "inline";
  document.getElementById("nextBtn").innerHTML = n === (tabs.length - 1) ? "Submit" : "Next";

  // Update the step indicator
  updateStepIndicator(n);
}

function nextPrev(n) {
  const tabs = document.getElementsByClassName("tab");

  // Prevent moving forward if current tab's fields are invalid
  if (n === 1 && !validateForm()) return false;

  // Hide the current tab
  tabs[currentTab].style.display = "none";

  // Update current tab index
  currentTab += n;

  // If reached the end of the form, submit it
  if (currentTab >= tabs.length) {
    document.getElementById("serReqForm").submit();
    return false;
  }

  // Display the next tab
  showTab(currentTab);
}

function validateForm() {
  const tabs = document.getElementsByClassName("tab");
  const inputs = tabs[currentTab].getElementsByTagName("input");
  let isValid = true;

  // Check each input field in the current tab
  for (let input of inputs) {
    // Skip the file input field if it's empty (optional field)
    if (input.type === "file" && input.files.length === 0) {
      continue; // Don't mark as invalid if the file input is empty (optional)
    }

    // If the input is empty, mark it as invalid
    if (input.value === "") {
      input.classList.add("invalid"); // Mark as invalid
      isValid = false;
    } else {
      input.classList.remove("invalid"); // Remove invalid class if there's value
    }
  }

  // Mark step as finished if valid
  if (isValid) {
    document.getElementsByClassName("step")[currentTab].classList.add("finish");
  }

  return isValid; // Return the validation status
}

function updateStepIndicator(n) {
  const steps = document.getElementsByClassName("step");

  // Remove "active" class from all steps
  for (let step of steps) {
    step.classList.remove("active");
  }

  // Add "active" class to the current step
  steps[n].classList.add("active");
}

/**********************************/

// Set selected result on page load
const selectedResultInput = document.getElementById('selectedresult');
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedResult = urlParams.get('selected');

  if (selectedResult) {
    selectedResultInput.value = selectedResult;
  }
};
