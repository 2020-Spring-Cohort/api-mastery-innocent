const createAButtonToAddANewAnimal = () => {

    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('add-new-animal');
    const btnElement = document.createElement('div');
    const iTag = document.createElement('i');
    iTag.classList.add('far');
    iTag.classList.add('fa-plus-square')
    btnElement.appendChild(iTag);
    const confirmationMsgWrapper = document.createElement('div');
    const confirmationMsg = document.createElement('p');
    confirmationMsgWrapper.appendChild(confirmationMsg);
    confirmationMsgWrapper.innerText = 'New Animal';
    btnWrapper.appendChild(btnElement);

    btnWrapper.appendChild(confirmationMsgWrapper);

    return btnWrapper;

}

export {
    createAButtonToAddANewAnimal
}