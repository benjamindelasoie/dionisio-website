const displayContact = () => {
    const main = document.getElementById('main');
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    const infop = document.createElement('p')
    infop.classList.add('contact-info');
    infop.innerText = `
        12 de abril y Belgrano
        TEL: 3447-410252
        email: dionisio@restobar.com
        No trabajamos con reservas.
        Lunes a Sabado, 09:00hs - 23:00hs
        Domingo, 10:00hs - 18:00hs
    `

    infoDiv.appendChild(infop);

    const comollegar = document.createElement('a');
    comollegar.href = "https://goo.gl/maps/HUGGL25HuGNcoiWBA";
    comollegar.innerText = 'COMO LLEGAR';
    comollegar.classList.add('como-llegar');

    contact.append(infoDiv, comollegar);
    main.appendChild(contact);
}

export default {
    displayContact,
}