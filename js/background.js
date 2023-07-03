const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const randomImage = images[Math.floor(Math.random() * 10) % images.length];

const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${randomImage}`;

document.body.appendChild(backgroundImage);
