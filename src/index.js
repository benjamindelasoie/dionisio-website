import init from "./init.js";
import home from "./home.js";
import contact from './contact.js';
import menu from "./menu.js";

import "./style.scss";


const content = document.getElementById('content');
const main = document.createElement('div');
main.id = 'main';
main.classList.add('main');

const initialization = init.displayInit();
content.appendChild(initialization);

const buttons = document.getElementsByClassName('tab');

for(const btn of buttons) {
    btn.addEventListener('click', handleClickTab(btn) ,false);
}


function handleClickTab(btn) {
    return () => {
        for (const btn of buttons) {
            btn.classList.remove('tab-active');
            btn.classList.add('tab-unactive');
        }
        main.innerHTML = '';
        btn.classList.add('tab-active');
        const tabId = btn.id;
        if (tabId == 'homeTab') {
            home.displayHome();
        } else if (tabId == 'menuTab') {
            menu.displayMenu();
        } else if (tabId == 'contactTab') {
            contact.displayContact();
        } else {
            console.log('problem with handleclick');
        }
    }
}

content.appendChild(main);

menu.displayMenu();