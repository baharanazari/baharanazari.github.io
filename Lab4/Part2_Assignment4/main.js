const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg","pic2.jpg","pic3.jpg","pi4.jpg","pic5.jpg"]

/* Declaring the alternative text for each image file */
const altText = {
    "pic1.jpg":"thumbnail image1",
    "pic2.jpg":"thumbnail image2",
    "pic3.jpg":"thumbnail image3",
    "pic4.jpg":"thumbnail image4",
    "pic5.jpg":"thumbnail image5",
};

/* Looping through images */
images.forEach(pic1.jpg)
const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

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