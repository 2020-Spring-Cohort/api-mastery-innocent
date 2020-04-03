const createAnimalForm = () => {

    const animalFormWrapper = document.createElement('div');

    const animalFormTitle = document.createElement('h3');
    animalFormTitle.innerText = 'Add Animal';


    const weightLabel = document.createElement('p');
    weightLabel.innerText = 'Weight';
    const weightInput = document.createElement('input');
    weightInput.setAttribute('type', 'text');

    const ageLabel = document.createElement('p');
    ageLabel.innerText = 'Age';
    const ageInput = document.createElement('input');
    ageInput.setAttribute('type', 'text');

    const types = [{
        type: 'Mamals',
        code: 'ma'
    }, {
        type: 'Aquatic',
        code: 'aq'
    }, {
        type: 'Bird',
        code: 'bi'
    }];
    const typeLabel = document.createElement('p');
    typeLabel.innerText = 'Type';
    const typeInput = document.createElement('select');

    for (let i = 0; i < types.length; i++) {
        const optionElement = document.createElement('option');

        optionElement.setAttribute('value', languages[i].code);
        optionElement.innerText = languages[i].type;
        typeInput.appendChild(optionElement);
    }

    const descriptionLabel = document.createElement('p');
    descriptionLabel.innerText = 'Parent Email';
    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');

    const dietLabel = document.createElement('p');
    dietLabel.innerText = 'Phone';
    const dietInput = document.createElement('input');
    dietInput.setAttribute('type', 'text');

    const pictureLabel = document.createElement('p');
    pictureLabel.innerText = 'Upload Picture';
    const pictureInput = document.createElement('input');
    pictureInput.setAttribute('type', 'file');



    const submitBtnWrapper = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtnWrapper.appendChild(submitBtn);
    submitBtn.innerText = 'Submit';

    submitBtn.addEventListener('click', () => {

        collectAnimalData();

    });


    animalFormWrapper.appendChild(animalFormTitle);
    animalFormWrapper.appendChild(weightLabel);
    animalFormWrapper.appendChild(weightInput);

    animalFormWrapper.appendChild(ageLabel);
    animalFormWrapper.appendChild(ageInput);

    animalFormWrapper.appendChild(typeLabel);
    animalFormWrapper.appendChild(typeInput);

    animalFormWrapper.appendChild(descriptionLabel);
    animalFormWrapper.appendChild(descriptionInput);

    animalFormWrapper.appendChild(dietLabel);
    animalFormWrapper.appendChild(dietInput);

    animalFormWrapper.appendChild(pictureLabel);
    animalFormWrapper.appendChild(pictureInput);

    animalFormWrapper.appendChild(submitBtnWrapper);

    const collectAnimalData = () => {

        const animal = {
            "name": nameInput.value,
            "weight": weightInput.value,

            "age": ageInput.value,

            "type": typeInput.value,

            "description": descriptionInput.value,

            "diet": dietInput.value,
            "pictureUrl": pictureInput.value

        }

        fetch('http://localhost:8080/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(animal)
            }).then(() => console.log(animal))

            .catch(err => console.error(err));
    }




    return animalFormWrapper;

}
export {
    createAnimalForm
}