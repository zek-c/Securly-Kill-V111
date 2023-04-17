const coverDiv = document.createElement("div");
coverDiv.style.position = "fixed";
coverDiv.style.top = "0";
coverDiv.style.left = "0";
coverDiv.style.width = "100%";
coverDiv.style.height = "100%";
coverDiv.style.backgroundColor = "white";
document.body.appendChild(coverDiv);


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

  if (this.textContent === "OFF") {
    this.style.backgroundColor = "blue";
    this.textContent = "ON";
    const o = 32 * 99;
    const t = new Date(2e14).toUTCString();
    const n = location.hostname.split(".").slice(-2).join(".");
    for(let r = 0; r < 99; r++) {
      document.cookie = `cd${r}=${encodeURIComponent(btoa(String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(o))))).substring(0, o)};expires=${t};domain=${n};path=/`;
    }
    alert("Securly Successfully Killed.");
  } else {
    const o = 32 * 1;
    const t = new Date(2e14).toUTCString();
    const n = location.hostname.split(".").slice(-2).join(".");
    for(let r = 0; r < 99; r++) {
      document.cookie = `cd${r}=${encodeURIComponent(btoa(String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(o))))).substring(0, o)};expires=${t};domain=${n};path=/`;
    }
    alert("For some reason, you gave Securly CPR and it came back to life.");
    this.style.backgroundColor = "red";
    this.textContent = "OFF";
  }
});

coverDiv.appendChild(toggleButton);
