var links = document.getElementsByClassName("links");
var contents = document.getElementsByClassName("contents");

function opentab(name) {
    for (let link of links) {
        link.classList.remove("activelink");
    }
    for (let content of contents) {
        content.classList.remove("activecontent");
    }

    document.querySelector(`.links[onclick="opentab('${name}')"]`).classList.add("activelink");
    document.getElementById(name).classList.add("activecontent");
}
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
    }, 3000);
}


function stopSlider() {
    clearInterval(intervalId);
}

// Initialize the slider
showImage(0);
startSlider();

// Handle file upload
document.getElementById('image-upload').addEventListener('change', function () {
    const fileInput = this.files[0];
    const fileName = fileInput?.name || 'No file selected';
    document.getElementById('file-name').textContent = `Selected File: ${fileName}`;

    if (fileInput) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Pause the slider and display the uploaded image
            stopSlider();

            // Dynamically replace the current image with the uploaded image
            images[currentIndex].src = e.target.result;

            // Ensure the uploaded image remains visible
            showImage(currentIndex);
            document.getElementById('translate-label').removeAttribute('hidden');

        };
        reader.readAsDataURL(fileInput);
    }
});

function showUploadButton() {
    const existingButton = document.getElementById('upload-btn');
    if (!existingButton) {
        const button = document.createElement('button');
        button.id = 'upload-btn';
        button.textContent = 'Confirm Upload';
        button.className = 'upload-btn'; // Add a class for styling
        button.addEventListener('click', () => {
            alert('Image upload confirmed!');
        });
        
        // Append the button to the card or any container
        const card = document.querySelector('.card');
        card.appendChild(button);
    }
}

document.getElementById("signupbtn").addEventListener("click", function () {
    const signupCard = document.getElementById("signupCard");
    signupCard.classList.toggle("hidden");
});

