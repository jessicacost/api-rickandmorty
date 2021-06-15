let numeroMaximoDePersonagens = 671;
const charactersId = [];

generateRandomNumber = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

getCharacter = (charactersId) => {
    return fetch(`https://rickandmortyapi.com/api/character/${charactersId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        data.forEach(setImagePropertiesInHtml);        
    })
}

setImagePropertiesInHtml = (item, index) => {
    const imageTag = document.getElementById('img-' + index);
    const imageName = document.getElementById('name-img-' + index);

    imageTag.src = item.image;
    imageTag.alt = 'Imagem do personagem: ' + item.name;

    imageName.innerHTML = item.name;
}

generateCharacterId = () => {
    for(let i = 0; i < 4; i = i + 1) {   
        charactersId.push(generateRandomNumber());
    }
}

// Ja quando carregar a pagina chamará essa Função
generateCharacterId();

getCharacter(charactersId);
