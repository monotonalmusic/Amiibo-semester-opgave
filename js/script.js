import generate from './generate.js';
import storage from './storage.js'; 


storage.characters().then(() => {
    if (sessionStorage.length > 0) {
        generate.allAmiibos();
    }
});

