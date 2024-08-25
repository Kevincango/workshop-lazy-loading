/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import {registerImage} from './jazy'

let addImage = 0;
const imagesContainer = document.getElementById('images');
const divImageContainer = document.getElementsByClassName('bg-gray-300');
const buttonAction = document.getElementById('generate-image');

buttonAction.addEventListener('click', () => {
    const singleImageContainer = document.createElement('div');
    singleImageContainer.className = 'bg-gray-300';
    singleImageContainer.style.minHeight = '100px';
    singleImageContainer.style.display = 'inline';
    const imageGenerate = document.createElement('img');
    const randomInt = Math.floor(Math.random() * 124);
    //imageGenerate.loading = 'lazy';
    imageGenerate.className = 'mx-auto';
    imageGenerate.width = '320';
    imageGenerate.dataset.src = `https://randomfox.ca/images/${randomInt}.jpg`;
    singleImageContainer.appendChild(imageGenerate);
    imagesContainer.appendChild(singleImageContainer);
    registerImage(singleImageContainer);
    console.log(`imagenes agregadas ${addImage++}`);
});

const cleanButton = document.getElementById('clean-images');

cleanButton.addEventListener('click', () => {
    [...divImageContainer].forEach((child) => {
        child.remove();
    })
});


