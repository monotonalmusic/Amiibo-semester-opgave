import listeners from './addlisteners.js';
import remove from './remove.js';
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
    remove.cartListener(amiibo);
    listeners.addCart(amiibo);

};


export default generate;