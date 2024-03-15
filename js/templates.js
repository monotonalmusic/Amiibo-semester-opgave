import listeners from "./addlisteners.js";

const templates = {}; 

templates.amiiboCard = (amiibo) => {
    let mainDiv = document.querySelector('#main-div');
    let amiiboCard = document.createElement('div');
    amiiboCard.id = amiibo.character;
    amiiboCard.classList.add('amiibo-card');
    amiiboCard.innerHTML = `
        <h2>${amiibo.character}</h2>
        <a href="singlecharacter.html?id=${amiibo.character}"><img src="${amiibo.image}"class="big-amiibo-img" alt="${amiibo.character}"></a>
        <button class="add-cart-button pretty-button">Add to cart</button>
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
        <button class="remove-button" id="${amiibo.character}-button">x</button>
    `;
    cartContent.appendChild(cartItem);
    listeners.removeCart(amiibo);
}

templates.header = () => {
    let header = document.querySelector('#header-div');
    header.innerHTML = `
    <a href="index.html"><div id="logo-div">
        <img src="../Amiibo-semester-opgave/images/amiibo-logo.png" id="logo-img">
        <p id="logo-text">DEPOT</p>
    </div></a>
    <div id="header-right">
        <div id="cart">
            <div id="cart-icon-div">
                <img id="cart-icon" src="../Amiibo-semester-opgave/images/shopping-cart-outline-svgrepo-com.svg">
                <span class='badge badge-warning' id='lblCartCount'>0</span>
            </div>
            <div id="cart-content">
            </div>
            <button class="pretty-button" id="checkout-button">Checkout!</button>
        </div>
    </div>
    `;
}

export default templates;