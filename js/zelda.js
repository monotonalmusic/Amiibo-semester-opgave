import listeners from './addlisteners.js';
import generate from './generate.js';
import storage from './storage.js'; 
import templates from './templates.js';

templates.header();

storage.characters().then(() => {
    listeners.cart();

    if (sessionStorage.length > 0) {
        generate.zelda();
    }

    if (localStorage.length > 0) {
        generate.cart();
        let badge = document.querySelector('#lblCartCount');
        badge.textContent = localStorage.length;
    }
});