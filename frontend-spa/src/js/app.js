const type = document.querySelector(".types");
const animalNav = document.querySelector("#animalNav");
let isDisplay = false;

animalNav.addEventListener("click", () => {
    if (isDisplay == false) {
        type.style.display = "grid";

    } else {
        type.style.display = "none";

    }
    isDisplay = !isDisplay;
});