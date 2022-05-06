import contact from "./contact";
import home from "./home";

const displayInit = () => {
    const header = document.createElement('div');
    header.classList.add('header');
    header.id = 'header';

    const headerText = document.createElement('div');
    headerText.classList.add('header-text');
    headerText.id = 'header-text';

    const brand = document.createElement('h1')
    brand.classList.add('brand');
    brand.id = 'brand';
    brand.textContent = 'DIONISIO'

    const subBrand = document.createElement('h3');
    subBrand.classList.add('subBrand');
    subBrand.id = 'subBrand';
    subBrand.textContent = 'Resto Bar';

    const headerContact = document.createElement('h3');
    headerContact.classList.add('subBrand');
    headerContact.id = 'header-contact';
    headerContact.textContent = 'Colon - Entre Ríos - Argentina';

    headerText.append(brand, subBrand, headerContact);

    const nav = document.createElement('nav')
    nav.classList.add('nav');
    
    const contactTab = document.createElement('button');
    contactTab.id = 'contactTab';
    contactTab.classList.add('tab');
    contactTab.innerText = 'CONTACT';
    
    const menuTab = document.createElement('button');
    menuTab.id = 'menuTab';
    menuTab.classList.add('tab', 'tab-active');
    menuTab.innerText = 'Menu'

    const homeTab = document.createElement('button');
    homeTab.id = 'homeTab';
    homeTab.classList.add('tab');
    homeTab.innerText = 'HOME'

    const navTabs = [homeTab, menuTab, contactTab];

    nav.append(...navTabs);


    header.append(headerText, nav);

    return header;    
}

export default {
    displayInit,
}