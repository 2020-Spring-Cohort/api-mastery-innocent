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

const url = "localhost:8080/types";

fetch(url)
    .then(response => {
        response.json
    })
    .then(animal => {
        console.log(animal);
    });