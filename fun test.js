// create a div element to hold the overlay
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
overlay.style.zIndex = '9999';

// create the two image elements
const imageOne = document.createElement('img');
imageOne.src = 'https://res.cloudinary.com/dxttxbdrd/image/upload/v1681826472/Untitled42_20230418070104_oqqjjn.png';
imageOne.style.position = 'absolute';
imageOne.style.top = '50%';
imageOne.style.left = '50%';
imageOne.style.transform = 'translate(-50%, -50%)';

const imageTwo = document.createElement('img');
imageTwo.src = 'https://res.cloudinary.com/dxttxbdrd/image/upload/v1681826909/IMG_0833_a6bvyw.jpg';
imageTwo.style.position = 'absolute';
imageTwo.style.top = '50%';
imageTwo.style.left = '50%';
imageTwo.style.transform = 'translate(-50%, -50%)';
imageTwo.style.display = 'none'; // hide imageTwo by default

// add the image elements to the overlay
overlay.appendChild(imageOne);
overlay.appendChild(imageTwo);

// add the overlay to the document body
document.body.appendChild(overlay);

// add an event listener to the top middle of the overlay
overlay.addEventListener('click', function(event) {
  const rect = imageOne.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  if (event.clientX >= centerX - 50 && event.clientX <= centerX + 50 && event.clientY <= rect.top) {
    if (imageOne.style.display === 'none') {
      // switch back to imageOne and run code one
      imageOne.style.display = 'block';
      imageTwo.style.display = 'none';
      console.log('Code one running...');
    } else {
      // switch to imageTwo and run code two
      imageOne.style.display = 'none';
      imageTwo.style.display = 'block';
      console.log('Code two running...');
    }
  }
});
