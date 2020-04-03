const createAnimalDetails = (animal) => {
    const singleAnimalAnchor = document.querySelector('.single-animal');
    const animalInfoAndImage = document.createElement('section');
    animalInfoAndImage.classList.add('animal__info__and__image');
    const animalImageWrapper = document.createElement('div');
    animalImageWrapper.classList.add('animalImage');
    animalImageWrapper.style.backgroundImage = `url(${animal.pictureUrl})`;
    const animalInfoWrapper = document.createElement('div');
    animalInfoWrapper.classList.add('animalInfo');


    const animalSingleInfoGenerator = (element, propertyName, propertyValue, id) => {

        const animalPropertyWrapper = document.createElement(element);
        animalPropertyWrapper.innerText = propertyName;
        const animalPropertyValueWrapper = document.createElement('span');
        animalPropertyValueWrapper.setAttribute('id', id);
        animalPropertyValueWrapper.innerText = propertyValue;
        animalPropertyWrapper.appendChild(animalPropertyValueWrapper);
        return animalPropertyWrapper;
    }

    const animalName = animalSingleInfoGenerator('h2', 'Name : ', animal.name, 'animal-name');
    const animalAge = animalSingleInfoGenerator('h2', 'Age : ', animal.age, 'animal-age');
    const animalDiet = animalSingleInfoGenerator('h2', 'Diet : ', animal.diet, 'animal-diet');
    const animalWeight = animalSingleInfoGenerator('h2', 'Weight : ', animal.weight, 'animal-weight');


    animalInfoWrapper.appendChild(animalName);
    animalInfoWrapper.appendChild(animalAge);
    animalInfoWrapper.appendChild(animalDiet);
    animalInfoWrapper.appendChild(animalWeight);

    animalInfoAndImage.appendChild(animalImageWrapper);
    animalInfoAndImage.appendChild(animalInfoWrapper);

    const descriptionWrapper = document.createElement('div');
    descriptionWrapper.classList.add('description');

    const descriptionTitle = document.createElement('H1');
    descriptionTitle.innerText = 'Description';

    const descriptionAnimalName = document.createElement('H1');
    descriptionAnimalName.setAttribute('id', 'description-animal-name');
    descriptionAnimalName.innerText = animal.name.toUpperCase();

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.setAttribute('id', 'para-description');
    descriptionParagraph.innerText = animal.description;

    descriptionWrapper.appendChild(descriptionAnimalName);
    descriptionWrapper.appendChild(descriptionTitle);
    descriptionWrapper.appendChild(descriptionParagraph);

    singleAnimalAnchor.appendChild(animalInfoAndImage);
    singleAnimalAnchor.appendChild(descriptionWrapper);
    return singleAnimalAnchor;

}


export {
    createAnimalDetails
}


/** <div class="description">
                    <h1>Description</h1>
                    <h1 id ="description-animal-name">Lion</h1>
                    <p id="para-description">For all of their roaring, growling, and ferociousness, lions are family animals and truly social in their own communities. They usually live in groups of 15 or more animals called prides. Lion prides can be as small as 3 or as big as 40 animals. In a pride, lions hunt prey, raise cubs, and defend their territory together. In prides the females do most of the hunting and cub rearing. Usually all the lionesses in the pride are related—mothers, daughters, grandmothers, and sisters.</p>

                </div> */