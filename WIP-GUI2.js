// Define the CSS styles as a string
const css = `
  .draggable {
    position: absolute;
    z-index: 9;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    width: 60px;
    height: 75px;
    border-radius: 10px; /* Sets the border radius to 10px */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  button {
    width: 60px; /* Sets the button width to 20px */
    height: 75px; /* Sets the button height to 35px */
    display: block;
    margin: auto; /* Centers the button horizontally and vertically */
  background-image: url('https://github.com/zek-c/about-blank-website/blob/main/Untitled%20design.png?raw=true');}
`;

// Create a new style element and append the CSS to it
const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

// Create a new div element to hold the GUI
const gui = document.createElement('div');
gui.classList.add('draggable');
document.body.appendChild(gui);

// Create the "Kill" button and append it to the GUI
const button = document.createElement('button');
button.textContent = 'KILL!';
gui.appendChild(button);

// Make the GUI draggable
let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

button.addEventListener('mousedown', dragMouseDown);

function dragMouseDown(event) {
  event = event || window.event;
  event.preventDefault();
  pos3 = event.clientX;
  pos4 = event.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;
}

function elementDrag(event) {
  event = event || window.event;
  event.preventDefault();
  pos1 = pos3 - event.clientX;
  pos2 = pos4 - event.clientY;
  pos3 = event.clientX;
  pos4 = event.clientY;
  gui.style.top = (gui.offsetTop - pos2) + 'px';
  gui.style.left = (gui.offsetLeft - pos1) + 'px';
}

function closeDragElement() {
  document.onmouseup = null;
  document.onmousemove = null;
}

// Add click event listener to the "Kill" button
button.addEventListener('click', () => {
  // Insert your code to run when the button is clicked here
});
