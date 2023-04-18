// Define the HTML code as a string
var html = `
<!DOCTYPE html>
<html>
<head>
	<title>Image Change on Click</title>
	<style>
		body {
			margin: 0;
			padding: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100vh;
			background-color: #f2f2f2;
		}

		img {
			width: 300px;
			height: 300px;
			cursor: pointer;
		}
	</style>
</head>
<body>
	<img id="myImg" src="image1.jpg">
	<script>
		var img = document.getElementById("myImg");
		var imageIndex = 1;
		var images = ["image1.jpg", "image2.jpg"];

		img.addEventListener("click", function() {
			imageIndex++;
			if (imageIndex >= images.length) {
				imageIndex = 0;
			}
			img.src = images[imageIndex];
		});
	</script>
</body>
</html>
`;

// Create a new HTML document using the HTML code
var doc = document.implementation.createHTMLDocument();
doc.documentElement.innerHTML = html;

// Append the new document to the current document's body
document.body.appendChild(doc.documentElement);
