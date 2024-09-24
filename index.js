const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');

let currentIndex = 0;
let intervalId;

function showImage(index) {
    images.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
    });
}

function startSlider() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 4000); 
}

showImage(0); 
startSlider();