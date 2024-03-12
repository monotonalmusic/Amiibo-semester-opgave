import templates from "./templates.js";
import remove from "./remove.js";

const listeners = {};

listeners.addCart = (amiibo) => {
    let button = document.querySelector(`#${amiibo.character} .add-cart-button`);
    button.addEventListener('click', () => {
        console.log('button clicked');
        templates.cartItem(amiibo);
        remove.cartListener(amiibo);
        console.log(amiibo.character);
        let retrievedCharacter = JSON.parse(sessionStorage.getItem(amiibo.character));
        localStorage.setItem(amiibo.character, JSON.stringify(retrievedCharacter));
    });
        
}

export default listeners;