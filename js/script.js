import generate from './generate.js';
import storage from './storage.js'; 


storage.characters().then(() => {
    if (sessionStorage.length > 0) {
        generate.allAmiibos();
    }

    if (localStorage.length > 0) {
        generate.cart();
        let badge = document.querySelector('#lblCartCount');
        badge.textContent = localStorage.length;
    }
});

