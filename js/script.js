import generate from './generate.js';
import storage from './storage.js'; 

document.addEventListener('DOMContentLoaded', function() {
    storage.characters().then((generate.allAmiibos()))
});
    

// let retrievedmario8bit = JSON.parse(sessionStorage.getItem('mario8bit'));

// console.log(retrievedmario8bit);