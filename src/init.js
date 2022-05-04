
const displayInit = () => {
    const nav = document.createElement('nav')
    nav.classList.add('nav');
    
    const contactTab = document.createElement('button');
    contactTab.id = 'contactTab';
    contactTab.classList.add('tab');
    contactTab.innerText = 'CONTACT';
    
    const menuTab = document.createElement('button');
    menuTab.id = 'menuTab';
    menuTab.classList.add('tab');
    menuTab.innerText = 'MENU'

    const homeTab = document.createElement('button');
    homeTab.id = 'homeTab';
    homeTab.classList.add('tab');
    homeTab.innerText = 'HOME'

    nav.append(homeTab, menuTab, contactTab);

    return nav;    
}

export default {
    displayInit,
}