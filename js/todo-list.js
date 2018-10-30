function makeTodo(todo) {
    const html = /*html*/`
        <li class="todo">
            <h3 class="name" style="background: ${todo.name};">
            ${todo.date} </h3>
            <button class="danger">X</button>
        </li>
        `;

    const template = document.createElement('template');
    template.innerHTML = html;
        
    return template.content;
}

const list = document.getElementById('todos');
    
const todoList = {
    add(todo) {
        const dom = makeTodo(todo);
         
        const listItem = dom.querySelector('li');

        list.appendChild(dom);
    }
};



export default todoList;