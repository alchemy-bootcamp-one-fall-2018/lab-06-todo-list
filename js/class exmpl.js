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

//from add fruits= add-todo
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

//   
//from fruit list = todo-list
function makeFruit(fruit) {
    const html = /*html*/`
        <li class="fruit">
            <h3 class="name" style="background: ${fruit.color};">
                ${fruit.name}
            </h3>
            <img src="assets/${fruit.image ? fruit.image : 'logo.png'}">
            <button class="danger">X</button>
        </li>
    `;

    // A. Create template element to convert string to DOM
    const template = document.createElement('template');

    // B. Assign innerHTML property
    template.innerHTML = html;

    // C. Return the `content` property which is the dom
    // (In a DocumentFragment)
    return template.content;
}

const list = document.getElementById('fruits');

const fruitList = {
    // init
    // should include:
    // 1. initial fruits array
    // 1. onRemove callback
    init(fruits, onRemove) {
        for(let i = 0; i < fruits.length; i++) {
            fruitList.add(fruits[i]);
        }
        fruitList.onRemove = onRemove;
    },
    add(fruit) {
        const dom = makeFruit(fruit);

        // do work of finding elements _before_ appending
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            fruitList.onRemove(fruit)
            listItem.remove();
        });

        // append to <ul>, this will empty the fragment
        list.appendChild(dom);
    }
};

export default fruitList;
