// This function opens a new tab with Google and alerts "Hello world" on it
function openAndRun() {
  // Open a new tab with Google
  var newTab = window.open('https://www.google.com', '_blank');
  // Define a function on the new tab's window object
  newTab.hello = function() {
    // Alert "Hello world" on the new tab
    newTab.alert('Hello world');
  };
  // Call the function from the current tab
  newTab.hello();
}
