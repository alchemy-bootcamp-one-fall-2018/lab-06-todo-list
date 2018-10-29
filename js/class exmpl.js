// from app.js instruction

import addFruit from './add-fruit.js';
import fruitList from './fruit-list.js';
import fruitApi from './fruits-api.js';

const fruits = fruitApi.getAll();

fruitList.init(fruits, function(fruit) {
    // this is the onRemove listener

    fruitApi.remove(fruit);
});

addFruit.init(function(fruit) {
    // this is the onAdd listener

    // tell the api service first
    fruitApi.add(fruit);

    // then update components
    fruitList.add(fruit);
});

//from add fruits
const addFruit = {
    // "init" method for initializing the component
    // 1. passed data or callback functions
    // 2. setup some event listeners
    init(onAdd) {
        const form = document.getElementById('add-form');

        // below is different way to write this
        // form.onsubmit = function() {};

        // "standard" way to add event listeners in JavaScript
        form.addEventListener('submit', function(event) {
            // prevent form from reloading page
            event.preventDefault();

            // form elements
            const elements = form.elements;

            // get the values from the form controls
            const fruit = {
                name: elements.name.value,
                color: elements.color.value,
                image: elements.image.value
            };

            onAdd(fruit);

            form.reset();
            document.activeElement.blur();
        });

    }
};

export default addFruit;