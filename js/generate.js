import listeners from './addlisteners.js';
import templates from './templates.js';

const generate = {};

generate.allAmiibos = async () => {
    console.log('generating')
    for (let i = 1; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        let amiibo = JSON.parse(sessionStorage.getItem(key));
        generate.amiibo(amiibo);
        
    };
    
};

generate.amiibo = async (amiibo) => {
    console.log(amiibo);
    templates.amiiboCard(amiibo);
    listeners.addCart(amiibo);

};

generate.cart = async () => {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let amiibo = JSON.parse(localStorage.getItem(key));
        templates.cartItem(amiibo);
    }
}


export default generate;