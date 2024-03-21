// Find the image that is currently displayed
const displayedImage = document.querySelector('.displayed-img');

// Find the container for thumbnail images
const thumbBar = document.querySelector('.thumb-bar');

// Find the button element
const btn = document.querySelector('button');

// Find the overlay element
const overlay = document.querySelector('.overlay');

/* List of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

/* Description for each image */
const altText = {
    "pic1.jpg": "human eye",
    "pic2.jpg": "A Rock",
    "pic3.jpg": "half white and half purple flower",
    "pic4.jpg": "A drawing",
    "pic5.jpg": "butterfly",
};

/* Loop through each image */
images.forEach(function (image) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', altText[image]); // Set alternative text based on the image filename
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
});

/* Add event listener to the button to darken or lighten the overlay */
btn.addEventListener('click', function () {
    // Check the current class name set on the button
    const currentClass = btn.getAttribute('class');

    // Toggle between "dark" and "light" class names
    if (currentClass === "dark") {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});





