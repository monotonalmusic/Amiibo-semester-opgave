import templates from "./templates.js";
import remove from "./remove.js";

const listeners = {};

listeners.addCart = (amiibo) => {
    let button = document.querySelector(`#${amiibo.character} .add-cart-button`);
    button.addEventListener('click', () => {
        console.log('button clicked');

        console.log(amiibo.character);
        let retrievedCharacter = JSON.parse(sessionStorage.getItem(amiibo.character));
        localStorage.setItem(amiibo.character, JSON.stringify(retrievedCharacter));
        let badge = document.querySelector('#lblCartCount');
        badge.textContent = localStorage.length;
        templates.cartItem(amiibo);
        remove.cartListener(amiibo);
    });
    
        
}

export default listeners;