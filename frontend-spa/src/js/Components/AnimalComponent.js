import {
    createAnimalDetails
} from './singleAnimal.js';

const renderAnimal = (animal) => {
    const singleAnimalAnchor = document.querySelector('.single-animal');
    const animalHolder = document.createElement('div');
    animalHolder.classList.add('animal');
    const animalPicture = document.createElement('div');
    animalPicture.classList.add('animalPic');
    animalPicture.style.backgroundImage = `url(${animal.pictureUrl})`;
    const animalLinkElement = document.createElement('a');
    animalLinkElement.setAttribute('id', 'singleAnimal');
    animalLinkElement.setAttribute('href', '');
    animalLinkElement.innerText = `${animal.name}`;
    animalLinkElement.setAttribute('data-id', animal.id);
    animalPicture.appendChild(animalLinkElement);
    animalHolder.appendChild(animalPicture);

    animalHolder.addEventListener('click', (e) => {
        e.preventDefault();
        while (singleAnimalAnchor.firstChild) {
            singleAnimalAnchor.removeChild(singleAnimalAnchor.firstChild);
        }


        createAnimalDetails(animal);

    });

    return animalHolder;
}
export {
    renderAnimal
}