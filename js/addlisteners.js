import templates from "./templates.js";


const listeners = {};

listeners.addCart = (amiibo) => {
    let button = document.querySelector(`#${amiibo.character} .add-cart-button`);
    button.addEventListener('click', () => {
        console.log('button clicked');
        if (localStorage.key(amiibo.character) === null){
            let retrievedCharacter = JSON.parse(sessionStorage.getItem(amiibo.character));
            localStorage.setItem(amiibo.character, JSON.stringify(retrievedCharacter));
            let badge = document.querySelector('#lblCartCount');
            badge.textContent = localStorage.length;
            templates.cartItem(amiibo);
            listeners.removeCart(amiibo);
        }
    });
    
        
}

listeners.removeCart = (amiibo) => {
    if (localStorage.length > 0) {
        console.log(amiibo.character)
        let cartItemButton = document.querySelector(`#${amiibo.character}-button`);
        cartItemButton.addEventListener('click', (e) => {
            let target = e.target.parentElement;
            localStorage.removeItem(amiibo.character);
            target.remove();
            let badge = document.querySelector('#lblCartCount');
            badge.textContent = localStorage.length;
        });
    }
}

listeners.cart = () => {
    let cartIcon = document.querySelector('#cart-icon-div');
    cartIcon.addEventListener('click', () => {
        console.log('cart clicked')
        let cartContent = document.querySelector('#cart-content');
        cartContent.classList.toggle('show');
    });
}

export default listeners;