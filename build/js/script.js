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

    function slideDish(dish, pr) {
        imageDish.style.backgroundImage = 'url("img/' + dish.img + '")';
        headingDish.textContent = dish.heading;
        descriptionDish.textContent = dish.description;
        priceDish.textContent = pr;
    }

    switch (nameDish) {
        case 'meat':
            slideDish(meat, price);
            break;
        case 'trout':
            slideDish(fish, price);
            break;
        case 'soup':
            slideDish(soup, price);
            break;
        case 'chicken':
            slideDish(chicken, price);
            break;
        case 'pasta':
            slideDish(spaghetti, price);
            break;
        case 'salad':
            slideDish(salad, price);
            break;       
        default: 
            break;
    }
}

document.querySelectorAll('.menu-item').forEach(function (item) {
    item.addEventListener('click', showDish, false);
})



ymaps.ready(function  () {
 
    var myMap;
     
        $('.fancybox').fancybox({height:600,afterShow : function() {
     
            myMap = new ymaps.Map('inline1', {
                        center: [56.999821, 40.972891],
                        zoom: 15,
                        behaviors: ["scrollZoom","drag"]
                    });	
     
        var myPlacemark = new ymaps.Placemark([56.999821, 40.972891], {
                        iconContent: 'LeRestaurant',
                        balloonContentHeader: '<strong>LeRestaurant</strong>',
                        balloonContentBody: 'ул. ...., д. ......',
                        balloonContentFooter: 'Сайт: <a href="#" target="_blank">#</a>'
                    }, {
                        preset: 'twirl#redStretchyIcon',
                        balloonMaxWidth: 250
                    });
     
                myMap.geoObjects.add(myPlacemark);			
     
        }, afterClose:function (){
            myMap.destroy();		
            myMap = null;
        }});
    });