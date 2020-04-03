const renderFooter = () => {
    const footerElement = document.createElement('footer');
    const footerPara = document.createElement('p');
    const dalylink = document.createElement('a');
    dalylink.setAttribute('href', 'http://dalytekam.github.io');
    dalylink.setAttribute('target', '_blank');
    dalylink.innerText = 'Daly';

    const innocentlink = document.createElement('a');
    innocentlink.setAttribute('href', '');
    innocentlink.setAttribute('target', '_blank');
    innocentlink.innerText = 'Innocent';

    const text1 = document.createTextNode('Copyright ');
    const text2 = document.createTextNode(' (c) ');
    const text3 = document.createTextNode(' and ');
    const text4 = document.createTextNode(' 2020 ');

    footerPara.appendChild(text1);
    footerPara.appendChild(text2);
    footerPara.appendChild(dalylink);
    footerPara.appendChild(text3);
    footerPara.appendChild(innocentlink);
    footerPara.appendChild(text4);







    footerElement.appendChild(footerPara);

    return footerElement;

}





export {

    renderFooter

}