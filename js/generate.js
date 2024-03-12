import remove from './remove.js';

const generate = {};

generate.allAmiibos = async () => {
    for (let i = 1; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        let amiibo = JSON.parse(sessionStorage.getItem(key));
        generate.amiibo(amiibo);
        
    }
    
};

generate.amiibo = async (amiibo) => {
    console.log(amiibo);
    let mainDiv = document.querySelector('#main-div');
    let amiiboCard = document.createElement('div');
    amiiboCard.id = amiibo.character;
    amiiboCard.classList.add('amiibo-card');
    // amiiboCard.id = 
    amiiboCard.innerHTML = `
        <h2>${amiibo.character}</h2>
        <img src="${amiibo.image}"class="big-amiibo-img" alt="${amiibo.character}">
        <button class="add-cart-button pretty-button">Click me</button>
    `;
    mainDiv.appendChild(amiiboCard);
    let button = amiiboCard.querySelector('.add-cart-button');
    button.addEventListener('click', () => {
        let cartContent = document.querySelector('#cart-content');
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${amiibo.character}</h3>
            <p>${amiibo.gameSeries}</p>
        `;
        cartContent.appendChild(cartItem);
        remove.cartListener(amiibo);
        //move this to another function
        console.log(amiibo.character);
        let retrievedCharacter = JSON.parse(sessionStorage.getItem(amiibo.character));
        localStorage.setItem(amiibo.character, JSON.stringify(retrievedCharacter));
        
    });

}


export default generate;