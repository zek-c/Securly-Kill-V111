// Create a div that covers the entire page with a white background
const coverDiv = document.createElement("div");
coverDiv.style.position = "fixed";
coverDiv.style.top = "0";
coverDiv.style.left = "0";
coverDiv.style.width = "100%";
coverDiv.style.height = "100%";
coverDiv.style.backgroundColor = "white";
document.body.appendChild(coverDiv);

// Create a pill-shaped toggle button element
const toggleButton = document.createElement("button");
toggleButton.style.position = "fixed";
toggleButton.style.top = "50%";
toggleButton.style.left = "50%";
toggleButton.style.transform = "translate(-50%, -50%)";
toggleButton.style.width = "200px";
toggleButton.style.height = "50px";
toggleButton.style.borderRadius = "25px";
toggleButton.style.backgroundColor = "red";
toggleButton.style.color = "white";
toggleButton.style.fontSize = "20px";
toggleButton.style.fontWeight = "bold";
toggleButton.style.cursor = "pointer";
toggleButton.textContent = "OFF";
toggleButton.addEventListener("click", function() {
  // Toggle the button state and style
  if (this.textContent === "OFF") {
    this.style.backgroundColor = "blue";
    this.textContent = "ON";
    // Code to run when button is on
    console.log("Button is ON");
  } else {
    this.style.backgroundColor = "red";
    this.textContent = "OFF";
    // Code to run when button is off
    console.log("Button is OFF");
  }
});
coverDiv.appendChild(toggleButton);
