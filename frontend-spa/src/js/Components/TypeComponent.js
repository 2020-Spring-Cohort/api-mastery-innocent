const renderType = () => {





    const typeHolder = (element, text, iconTag) => {
        const typeElement = document.createElement('div');
        typeElement.classList.add('type');
        const typeNameHolder = document.createElement(element);
        typeNameHolder.innerText = text;
        typeElement.appendChild(iconTag);
        typeElement.appendChild(typeNameHolder);
        return typeElement;
    }


    const createIconElement = (class1, class2) => {
        const iElement = document.createElement('i');
        iElement.classList.add(class1);
        iElement.classList.add(class2);
        return iElement;
    }

    const mamal = createIconElement('fas', 'fa-horse');
    const aquatic = createIconElement('fas', 'fa-fish');
    const amphibian = createIconElement('fas', 'fa-frog');
    const others = createIconElement('fas', 'fa-crow');


    const mamalBtn = typeHolder('h4', 'Mamal', mamal);
    const aquaticBtn = typeHolder('h4', 'Aquatic', aquatic);
    const amphibianBtn = typeHolder('h4', 'Amphibian', amphibian);
    const othersBtn = typeHolder('h4', 'Others', others);


    const typesSection = document.querySelector('.types');
    typesSection.appendChild(mamalBtn);
    typesSection.appendChild(aquaticBtn);
    typesSection.appendChild(amphibianBtn);
    typesSection.appendChild(othersBtn);


    return typesSection;

}

export {
    renderType
}