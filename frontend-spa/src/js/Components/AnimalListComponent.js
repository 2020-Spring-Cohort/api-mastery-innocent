import {
    renderAnimal
} from './AnimalComponent.js';

import {
    createAnimalDetails
} from './singleAnimal.js';

const renderAnimalList = () => {
    const animalList = document.querySelector('.animals');
    const singleAnimalAnchor = document.querySelector('.single-animal');
    fetch('http://localhost:8080/animals')
        .then(response => response.json())
        .then(animals => {

            animals.forEach(animal => {
                const oneAnimalComponent = renderAnimal(animal);
                animalList.appendChild(oneAnimalComponent);

            });
            createAnimalDetails(animals[0]);
        }).catch(err => console.error(err));

    return animalList;
}

export {
    renderAnimalList
}