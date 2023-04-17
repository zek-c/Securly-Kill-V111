const gui = document.createElement('div');
gui.classList.add('draggable', 'gui-container');
document.body.appendChild(gui);


const button = document.createElement('button');
button.textContent = 'KILL!';
gui.appendChild(button);


const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
document.head.appendChild(link);


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


button.addEventListener('click', () => {
  // Insert your code to run when the button is clicked here
});
