
function checkIfDue() {
    var givenDate = '2018-10-22';
    var currentDate = new Date();
    givenDate = new Date(givenDate);

    if(givenDate > currentDate){
        alert(' ✓ ');
    }
    else{
        alert(' x ');
    }
}


// ${todo.done ? 'Complete' : 'Incomplete'} 
//   ^ ^ if todo.done is True, type Complete otherwise Incomplete
function makeTodo(todo) {
    console.log('hiiiiiii', todo.done);

    const html = /*html*/`
        <li class="todo">
            <h3 class="name">${todo.task}<br /></h3>
                ${todo.due}
            <h4>${todo.done === true ? ' ✓ ' : ' x '}</h4>
            <button class="danger"> Remove </button>
        </li>
    `;

    const template = document.createElement('template');

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

        list.appendChild(dom);
    }
};

export default todoList;