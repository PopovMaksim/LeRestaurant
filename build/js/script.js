// let pr;
let meat = {
    img: 'meatt.jpg',
    heading: 'Raw meat with BBQ',
    description: 'Lorem 11111 ipsum dolor sit amet consectetur adipisicing elit. Maiores sint consequuntur maxime ut numquam possimus esse exercitationem, nihil aliquam, at iste pariatur nam est eius, quam animi magni? Quisquam, facere!'
};
let fish = {
    img: 'fish.jpg',
    heading: 'Fresh trout',
    description: 'Lorem 22222 ipsum dolor sit amet consectetur adipisicing elit. Maiores sint consequuntur maxime ut numquam possimus esse exercitationem, nihil aliquam, at iste pariatur nam est eius, quam animi magni? Quisquam, facere!'
};
let soup = {
    img: 'mushroom.jpg',
    heading: 'Mushroom soup',
    description: 'Lorem 33333 ipsum dolor sit amet consectetur adipisicing elit. Maiores sint consequuntur maxime ut numquam possimus esse exercitationem, nihil aliquam, at iste pariatur nam est eius, quam animi magni? Quisquam, facere!'
};
let chicken = {
    img: 'chicken.jpg',
    heading: 'Chiken with potatoes',
    description: 'Lorem 44444 ipsum dolor sit amet consectetur adipisicing elit. Maiores sint consequuntur maxime ut numquam possimus esse exercitationem, nihil aliquam, at iste pariatur nam est eius, quam animi magni? Quisquam, facere!'
};
let spaghetti = {
    img: 'spaghetti.jpg',
    heading: 'Pasta with tomato puree',
    description: 'Lorem 55555 ipsum dolor sit amet consectetur adipisicing elit. Maiores sint consequuntur maxime ut numquam possimus esse exercitationem, nihil aliquam, at iste pariatur nam est eius, quam animi magni? Quisquam, facere!'
};
let salad = {
    img: 'salad.jpg',
    heading: 'Salad with beetroot',
    description: 'Lorem 66666 ipsum dolor sit amet consectetur adipisicing elit. Maiores sint consequuntur maxime ut numquam possimus esse exercitationem, nihil aliquam, at iste pariatur nam est eius, quam animi magni? Quisquam, facere!'
};

let fullDish = document.getElementsByClassName('detailed-menu')[0];
let dishImage = document.getElementsByClassName('dish-image');
let dishDescription = document.getElementsByClassName('dish-description');

function showDish() {
    let price = this.getElementsByClassName('price')[0].textContent;;
    let nameDish = this.firstChild.getAttribute('alt');
    let imageDish = fullDish.getElementsByClassName('dish-image')[0];
    let headingDish = fullDish.getElementsByClassName('description-head')[0];
    let descriptionDish = fullDish.getElementsByClassName('description-content')[0];
    let priceDish = fullDish.getElementsByClassName('dish-price')[0];

    switch (nameDish) {
        case 'meat':
            imageDish.style.backgroundImage = 'url("img/' + meat.img + '")';
            headingDish.textContent = meat.heading;
            descriptionDish.textContent = meat.description;
            priceDish.textContent = price + ' - ORDER';
            break;
        case 'trout':
            imageDish.style.backgroundImage = 'url("img/' + fish.img + '")';
            headingDish.textContent = fish.heading;
            descriptionDish.textContent = fish.description;
            priceDish.textContent = price + ' - ORDER';
            break;
        case 'soup':
            imageDish.style.backgroundImage = 'url("img/' + soup.img + '")';
            headingDish.textContent = soup.heading;
            descriptionDish.textContent = soup.description;
            priceDish.textContent = price + ' - ORDER';
            break;
        case 'chicken':
            imageDish.style.backgroundImage = 'url("img/' + chicken.img + '")';
            headingDish.textContent = chicken.heading;
            descriptionDish.textContent = chicken.description;
            priceDish.textContent = price + ' - ORDER';
            break;
        case 'pasta':
            imageDish.style.backgroundImage = 'url("img/' + spaghetti.img + '")';
            headingDish.textContent = spaghetti.heading;
            descriptionDish.textContent = spaghetti.description;
            priceDish.textContent = price + ' - ORDER';
            break;
        case 'salad':
            imageDish.style.backgroundImage = 'url("img/' +salad.img + '")';
            headingDish.textContent = salad.heading;
            descriptionDish.textContent = salad.description;
            priceDish.textContent = price + ' - ORDER';
            break;       
        default: 
            break;
    }
}

document.querySelectorAll('.menu-item').forEach(function (item) {
    item.addEventListener('click', showDish, false);
})