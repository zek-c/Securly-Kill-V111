// This function creates an iframe with Google and alerts "Hello world" on it
function createAndRun() {
  // Create an iframe element
  var iframe = document.createElement('iframe');
  // Set its src attribute to Google
  iframe.src = 'https://www.google.com';
  // Append it to the document body
  document.body.appendChild(iframe);
  // Wait for the iframe to load
  iframe.onload = function() {
    // Access the contentWindow property of the iframe
    var iframeWindow = iframe.contentWindow;
    // Alert "Hello world" on the iframe window
    iframeWindow.alert('Hello world');
  };
}
