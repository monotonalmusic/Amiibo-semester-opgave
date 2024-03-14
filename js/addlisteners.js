import templates from "./templates.js";


const listeners = {};

listeners.addCart = (amiibo) => {
    let button = document.querySelector(`#${amiibo.character} .add-cart-button`);
    button.addEventListener('click', () => {
        console.log('button clicked');
        let retrievedCharacter = JSON.parse(sessionStorage.getItem(amiibo.character));
        localStorage.setItem(amiibo.character, JSON.stringify(retrievedCharacter));
        let badge = document.querySelector('#lblCartCount');
        badge.textContent = localStorage.length;
        templates.cartItem(amiibo);
        listeners.removeCart(amiibo);
    });
    
        
}

listeners.removeCart = (amiibo) => {
    if (localStorage.length > 0) {
        console.log(amiibo.character)
        let cartItem = document.querySelector(`#${amiibo.character}-cart`);
        console.log(cartItem)
        cartItem.addEventListener('click', (e) => {
            let target = e.target.parentElement;
            localStorage.removeItem(amiibo.character);
            target.remove();
            let badge = document.querySelector('#lblCartCount');
            badge.textContent = localStorage.length;
        });
    }
}
export default listeners;