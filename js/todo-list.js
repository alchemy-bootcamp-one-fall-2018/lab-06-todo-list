

function makeTodo(todo) {
    const html = /*html*/`
        <li class="todo">
            <h3 class="name" style="background: ${todo.color};">
                ${todo.name}
            </h3>
            <img src="assets/${todo.image ? todo.image : 'caripizza.png'}">
            <button class="danger"> Remove </button>
        </li>
    `;

    // template element to convert string to DOM
    const template = document.createElement('template');

    // B. Assign innerHTML property
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('todos');

const todoList = {

    init(todos, onRemove) {
        for(let i = 0; i < todos.length; i++) {
            todoList.add(todos[i]);
        }
        todoList.onRemove = onRemove;
    },
    add(todo) {
        const dom = makeTodo(todo);

        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            todoList.onRemove(todo);
            listItem.remove();
        });

        // append to <ul>, this will empty the fragment
        list.appendChild(dom);
    }
};

export default todoList;