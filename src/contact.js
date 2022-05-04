
const displayContact = () => {
    const contact = document.createElement('h1');
    contact.innerText = 'ACA TENES EL CONTACT';

    return contact;
}

function logContact() {
    console.log('contact');
}

export default {
    displayContact,
}