const generate = {};

generate.amiibo = (amiibo) => {
    let mainDiv = document.querySelector('#main-div');
    let amiiboCard = document.createElement('div');
    amiiboCard.classList.add('amiibo-card');
    amiiboCard.innerHTML = `
        <h2>${amiibo.character}</h2>
        <img src="${amiibo.image}" alt="${amiibo.character}">
        <p>${amiibo.gameSeries}</p>
    `;
    mainDiv.appendChild(amiiboCard);
}

export default generate;