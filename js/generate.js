import remove from './remove.js';

const generate = {};

generate.allAmiibos = () => {
    for (let i = 1; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        let amiibo = JSON.parse(sessionStorage.getItem(key));
        generate.amiibo(amiibo);
    }
    
}

generate.amiibo = (amiibo) => {
    let mainDiv = document.querySelector('#main-div');
    let amiiboCard = document.createElement('div');
    amiiboCard.classList.add('amiibo-card');
    // amiiboCard.id = 
    amiiboCard.innerHTML = `
        <h2>${amiibo.amiiboSeries}</h2>
        <img src="${amiibo.image}"class="big-amiibo-img" alt="${amiibo.character}">
        <p>${amiibo.gameSeries}</p>
        <button class="add-cart-button">Click me</button>
    `;
    mainDiv.appendChild(amiiboCard);
    let button = amiiboCard.querySelector('.add-cart-button');
    button.addEventListener('click', () => {
        let cart = document.querySelector('#cart');
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${amiibo.amiiboSeries}</h3>
            <p>${amiibo.gameSeries}</p>
        `;
        cart.appendChild(cartItem);
        remove.cartListener();
    });

}


export default generate;