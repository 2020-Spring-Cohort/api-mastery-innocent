import {
    renderAnimal
} from './AnimalComponent.js';

const renderAnimalList = () => {
    const animalList = document.querySelector('.animals');

    fetch('http://localhost:8080/animals')
        .then(response => response.json())
        .then(animals => {

            animals.forEach(animal => {
                const oneAnimalComponent = renderAnimal(animal);
                animalList.appendChild(oneAnimalComponent);
            });
        }).catch(err => console.error(err));

    return animalList;
}

export {
    renderAnimalList
}