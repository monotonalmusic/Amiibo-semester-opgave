import data from './fetch.js';

const storage = {};

storage.characters = async () => {
    let mario8bit = await data.fetch('https://www.amiiboapi.com/api/amiibo/?name=mario').then(data => data.amiibo[6]);
    localStorage.setItem('mario8bit', JSON.stringify(mario8bit));

    let zeldatears = await data.fetch('https://www.amiiboapi.com/api/amiibo/?name=zelda').then(data => data.amiibo[4]);
    localStorage.setItem('zeldatears', JSON.stringify(zeldatears));

    let luigi = await data.fetch('https://www.amiiboapi.com/api/amiibo/?name=luigi').then(data => data.amiibo[6]);
    localStorage.setItem('luigi', JSON.stringify(luigi));

    let yoshi = await data.fetch('https://www.amiiboapi.com/api/amiibo/?name=yoshi').then(data => data.amiibo[1]);
    localStorage.setItem('yoshi', JSON.stringify(yoshi));

};

export default storage;