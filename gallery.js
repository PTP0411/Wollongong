// Get the modal and images
var modal = document.getElementById('imageModal');
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var images = document.querySelectorAll(".gallery-image");

// Loop through each image to add an event listener
images.forEach(function (img) {
    img.onclick = function() {
        modal.style.display = "flex";  // Show the modal using 'flex'
        modalImg.src = this.src;       // Set the image in the modal
        captionText.innerHTML = this.alt;  // Set the caption from the image's alt text
    };
});

// Close the modal when the user clicks the close button
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";  // Close the modal when the user clicks the close button
};

// Close the modal when clicked outside the image (optional)
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
