import generate from './generate.js';
import storage from './storage.js';

storage.characters();

generate.amiibo(JSON.parse(localStorage.getItem('mario8bit')));



// let retrievedmario8bit = JSON.parse(localStorage.getItem('mario8bit'));

// console.log(retrievedmario8bit);