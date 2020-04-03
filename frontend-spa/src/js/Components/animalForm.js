const createAnimalForm = () => {

    const animalFormWrapper = document.createElement('div');

    const animalFormTitle = document.createElement('h3');
    animalFormTitle.innerText = 'Add Animal';

    const nameLabel = document.createElement('p');
    nameLabel.innerText = 'Name';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');





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
        code: '1'
    }, {
        type: 'Aquatic',
        code: '2'
    }, {
        type: 'Bird',
        code: '3'
    }];
    const typeLabel = document.createElement('p');
    typeLabel.innerText = 'Type';
    const typeInput = document.createElement('select');

    for (let i = 0; i < types.length; i++) {
        const optionElement = document.createElement('option');

        optionElement.setAttribute('value', parseInt(types[i].code));
        optionElement.innerText = types[i].type;
        typeInput.appendChild(optionElement);
    }

    const descriptionLabel = document.createElement('p');
    descriptionLabel.innerText = 'Description';
    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');

    const dietLabel = document.createElement('p');
    dietLabel.innerText = 'Diet';
    const dietInput = document.createElement('input');
    dietInput.setAttribute('type', 'text');

    const pictureLabel = document.createElement('p');
    pictureLabel.innerText = 'Upload Picture';
    const pictureInput = document.createElement('input');
    pictureInput.setAttribute('type', 'file');
    pictureInput.setAttribute('required', true);


    const submitBtnWrapper = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtnWrapper.appendChild(submitBtn);
    submitBtn.innerText = 'Submit';

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        uploadPicture();
        /*collectAnimalData();*/

    });


    animalFormWrapper.appendChild(animalFormTitle);

    animalFormWrapper.appendChild(nameLabel);
    animalFormWrapper.appendChild(nameInput);

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
            "type": {
                "id": typeInput.value
            },
            "description": descriptionInput.value,
            "diet": dietInput.value,
            "pictureUrl": ''

        }

        fetch('http://localhost:8080/animals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(animal)
            }).then(() => console.log(animal))

            .catch(err => console.error(err));
    }


    const uploadPicture = () => {
        const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/de1yfkbh6/image/upload';
        const uploadPreset = '350and350';
        const file = pictureInput.files[0];
        console.log(file);
        const formdata = new FormData();
        formdata.append('fileToUpload', file);
        formdata.append('upload_preset', uploadPreset);

        fetch(cloudinaryUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formdata
            })
            .then(res => {
                console.log(res);

            })


            .catch(err => console.error(err));



    };



    return animalFormWrapper;

}
export {
    createAnimalForm
}