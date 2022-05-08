import menuData from './assets/menuData.json'

const displayMenu = () => {
    const main = document.getElementById('main');

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.id = 'menu';

    for (const cat of menuData.categories) {
        const catDiv = document.createElement('div');
        catDiv.classList.add('category');

        const catName = document.createElement('h3');
        catName.classList.add('category-name');
        catName.innerText = cat.categoryName;

        catDiv.appendChild(catName);

        const dishesDiv = document.createElement('div');
        dishesDiv.classList.add('dishes');

        for (const dish of cat.dishes) {
            const dishDiv = document.createElement('div');
            dishDiv.classList.add('dish');

            const dishName = document.createElement('h3');
            dishName.classList.add('dish-name');
            dishName.innerText = dish.name;

            const dishPrice = document.createElement('h4');
            dishPrice.classList.add('dish-price');
            dishPrice.innerText = dish.price.toString();
            
            dishDiv.append(dishName, dishPrice);

            if (dish.desc != null) {
                const dishDesc = document.createElement('h5');
                dishDesc.classList.add('dish-desc');
                dishDesc.innerText = dish.desc;
                dishDiv.appendChild(dishDesc);
            } else {
                dishDiv.classList.add('dish-no-desc')
            }


            dishesDiv.appendChild(dishDiv);
        }
        catDiv.appendChild(dishesDiv);
        menu.appendChild(catDiv);
    }

    main.appendChild(menu);
}

export default {
    displayMenu,
}