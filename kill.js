const e = document.querySelectorAll("div.head-top, div.wonderbar");

// define elements to remove
e.forEach(function(element) {
  element.remove();
});

// make buttons and iframe
const a = document.querySelectorAll("button.slick-prev.slick-arrow.slick-disabled, button.slick-next.slick-arrow.slick, button.slick-prev.slick-arrow, button.slick-next.slick-arrow.slick-disabled");
const i = document.createElement("iframe");
i.style.position = "fixed";
i.style.top = "0";
i.style.left = "0";
i.style.width = "100%";
i.style.height = "100%";
i.style.border = "none";
i.style.backgroundColor = "white"; 
document.body.appendChild(i);
const b = document.createElement("button");
b.style.position = "fixed";
b.style.top = "50%";
b.style.left = "50%";
b.style.transform = "translate(-50%, -50%)";
b.style.width = "800px";
b.style.height = "200px";
b.style.borderRadius = "100px";
b.style.backgroundColor = "red";
b.style.color = "white";
b.style.fontSize = "100px";
b.style.fontWeight = "bold";
b.style.cursor = "pointer";
b.textContent = "OFF";
b.addEventListener("click", function() {
// check if already killed and display button accordingly
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
// attach buttons
i.contentDocument.body.appendChild(b);
