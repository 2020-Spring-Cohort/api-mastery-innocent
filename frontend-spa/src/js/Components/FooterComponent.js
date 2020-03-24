const renderFooter = () => {
    const footerElement = document.createElement('footer');
    footerElement.innerHTML = `<p>Copyright &copy Innocent and Daly 2020</p>`;
    return footerElement;
}


export {
    renderFooter
}