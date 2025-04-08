const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".gallery-image");
let currentIndex = -1;

// Open modal and store index
images.forEach((img, i) => {
    img.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        currentIndex = i;
    };
});

// Close modal with close button
document.querySelector(".close").onclick = function () {
    modal.style.display = "none";
};

// Close modal by clicking outside the image
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }

    // Navigate with arrow keys
    if (modal.style.display === "flex") {
        if (event.key === "ArrowRight") showNextImage();
        else if (event.key === "ArrowLeft") showPrevImage();
    }
});

// Arrow click handlers
document.querySelector(".prev").onclick = showPrevImage;
document.querySelector(".next").onclick = showNextImage;

// Show next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}

// Show previous image
function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}
