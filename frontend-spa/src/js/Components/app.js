import {
    renderFooter
} from './FooterComponent.js';

import {
    renderHeader
} from './HeaderComponent.js';

import {
    renderType
} from './TypeComponent.js';
import {
    renderAnimalList
} from './AnimalListComponent.js';

import {
    createAnimalForm
} from './animalForm.js';

import {
    createAButtonToAddANewAnimal
} from './addAnimalBtn.js';




const type = document.querySelector(".types");

const renderHomepage = () => {
    const body = document.querySelector('body');
    body.appendChild(renderFooter());
    body.prepend(renderHeader());
    const mainSection = document.querySelector('main');
    type.prepend(createAButtonToAddANewAnimal());

    mainSection.appendChild(renderType());
    const animalListSection = document.querySelector('.alldisplay');
    animalListSection.prepend(renderAnimalList());
    mainSection.appendChild(animalListSection);


}

renderHomepage();


const handleDisplayType = () => {
    if (isDisplay == false) {

        type.style.transform = "translateY(0px)";
        type.style.display = "grid";
    } else {
        type.style.transform = "translateY(-300px)";

    }
    isDisplay = !isDisplay;
}


const animalNav = document.querySelector("#animalNav");
let isDisplay = false;

animalNav.addEventListener("click", () => {
    handleDisplayType();
});


/*********************************************** */

const url = "http://localhost:8080/animals";

fetch(url)
    .then((response) => response.json())
    .then(res => {
        console.log(res);

    });