import templates from "./templates.js";


const listeners = {};

listeners.addCart = (amiibo) => {
    let button = document.querySelector(`#${amiibo.character} .add-cart-button`);
    button.addEventListener('click', () => {
        let retrievedCharacter = JSON.parse(sessionStorage.getItem(amiibo.character));
        if (localStorage.key(retrievedCharacter.character) === retrievedCharacter.character) {
            console.log(retrievedCharacter.character)
            console.log('returned')
            return;
        } else {
        console.log('button clicked'); 
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
        if (localStorage.length > 0) {
            let cartContent = document.querySelector('#cart-content');
            cartContent.classList.toggle('hide');
        }
    });
}

export default listeners;