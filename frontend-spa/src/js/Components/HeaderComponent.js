const renderHeader = () => {
    const headerElement = document.createElement('header');
    const logoElement = document.createElement('div');
    logoElement.classList.add('logo');
    const linkTagElement = document.createElement('a');
    linkTagElement.setAttribute('href', '');
    const iconTagElement = document.createElement('i');
    iconTagElement.classList.add('fas');
    iconTagElement.classList.add('fa-horse');
    linkTagElement.appendChild(iconTagElement);
    logoElement.appendChild(linkTagElement);
    headerElement.appendChild(logoElement);


    const createIconElement = (class1, class2) => {
        const iElement = document.createElement('i');
        iElement.classList.add(class1);
        iElement.classList.add(class2);
        return iElement;
    }


    const navElement = document.createElement('nav');

    const ulElement = document.createElement('ul');

    const firstLiElement = document.createElement('li');
    const homeNav = createIconElement('fas', 'fa-home');
    firstLiElement.innerText = 'Home';
    firstLiElement.prepend(homeNav);

    const secondLiElement = document.createElement('li');
    secondLiElement.setAttribute('id', 'animalNav');
    const animalNav = createIconElement('fas', 'fa-paw');
    secondLiElement.innerText = 'Animals';
    secondLiElement.prepend(animalNav);

    const thirdLiElement = document.createElement('li');
    const contactNav = createIconElement('fas', 'fa-phone');
    thirdLiElement.innerText = 'Contact';
    thirdLiElement.prepend(contactNav);

    ulElement.appendChild(firstLiElement);
    ulElement.appendChild(secondLiElement);
    ulElement.appendChild(thirdLiElement);
    navElement.appendChild(ulElement);
    headerElement.appendChild(navElement);







    return headerElement;
}

export {
    renderHeader
}