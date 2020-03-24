const renderAnimal = (animal) => {

    const animalHolder = document.createElement('div');
    animalHolder.classList.add('animal');
    const animalPicture = document.createElement('div');
    animalPicture.classList.add('animalPic');
    animalPicture.style.backgroundImage = `url(${animal.pictureUrl})`;
    const animalLinkElement = document.createElement('a');
    animalLinkElement.setAttribute('id', 'singleAnimal');
    animalLinkElement.setAttribute('href', '');
    animalLinkElement.innerText = `${animal.name}`;
    animalLinkElement.setAttribute('animalId', animal.id);
    animalPicture.appendChild(animalLinkElement);
    animalHolder.appendChild(animalPicture);

    return animalHolder;
}
export {
    renderAnimal
}