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


const renderHomepage = () => {
    const body = document.querySelector('body');
    body.appendChild(renderFooter());
    body.prepend(renderHeader());
    const mainSection = document.querySelector('main');
    mainSection.appendChild(renderType());
    const animalListSection = document.querySelector('.alldisplay');
    animalListSection.prepend(renderAnimalList());
    mainSection.appendChild(animalListSection);
}

renderHomepage();




const type = document.querySelector(".types");
const animalNav = document.querySelector("#animalNav");
let isDisplay = false;

animalNav.addEventListener("click", () => {
    if (isDisplay == false) {

        type.style.transform = "translateY(0px)";
        type.style.display = "grid";
    } else {
        type.style.transform = "translateY(-300px)";

    }
    isDisplay = !isDisplay;
});


/*********************************************** */

const url = "http://localhost:8080/types";

fetch(url)
    .then((response) => response.json())
    .then(res => {
        console.log(res);

    });