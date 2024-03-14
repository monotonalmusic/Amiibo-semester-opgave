import remove from './remove.js';

const templates = {}; 


templates.amiiboCard = (amiibo) => {
    let mainDiv = document.querySelector('#main-div');
    let amiiboCard = document.createElement('div');
    amiiboCard.id = amiibo.character;
    amiiboCard.classList.add('amiibo-card');
    amiiboCard.innerHTML = `
        <h2>${amiibo.character}</h2>
        <img src="${amiibo.image}"class="big-amiibo-img" alt="${amiibo.character}">
        <button class="add-cart-button pretty-button">Click me</button>
    `;
    mainDiv.appendChild(amiiboCard);
};

templates.cartItem = (amiibo) => {
    let cartContent = document.querySelector('#cart-content');
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.id = `${amiibo.character}-cart`;
    cartItem.innerHTML = `
        <h3>${amiibo.character}</h3>
        <p>${amiibo.gameSeries}</p>
    `;
    cartContent.appendChild(cartItem);
    remove.cartListener(amiibo);
}

export default templates;