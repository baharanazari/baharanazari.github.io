const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"]

/* Declaring the alternative text for each image file */
const altText = {
    "pic1.jpg":"human eye",
    "pic2.jpg":"A Rock",
    "pic3.jpg":"half white and half purple flower",
    "pic4.jpg":"A drawing",
    "pic5.jpg":"butterfly",
};

/* Looping through images */
images.forEach(function(image) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', altText[image]); // Set alt text based on the filename
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}); 

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
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