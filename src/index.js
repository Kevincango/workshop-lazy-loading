/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


const imagesContainer = document.getElementById('images');
const buttonAction = document.getElementById('generate-image');

buttonAction.addEventListener('click', () => {
    const singleImageContainer = document.createElement('div');
    singleImageContainer.className = 'p-4';
    const imageGenerate = document.createElement('img');
    const randomInt = Math.floor(Math.random() * 124);
    imageGenerate.loading = 'lazy';
    imageGenerate.className = 'mx-auto';
    imageGenerate.width = '320';
    imageGenerate.src = `https://randomfox.ca/images/${randomInt}.jpg`;

    singleImageContainer.appendChild(imageGenerate);
    imagesContainer.appendChild(singleImageContainer);
});


