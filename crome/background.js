images = ['0.png', '1.png', '2.png', '3.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const img = document.createElement('img');

img.src = `../resources/images/${chosenImage}`;

document.body.appendChild(img);
