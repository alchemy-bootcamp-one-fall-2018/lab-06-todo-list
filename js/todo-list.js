function makeList(task) {
    const html = /*html*/`
        <li class="taskTodo">
            <h3>{$list.task}</h3>             //this part makes no sense to me
        </li>
    `;

    const template = document.createElement('template');   //create template element to convert string to DOM
    template.innerHTML = html;                 //assign inner HTML property
    return template.content;                  //return the content property, which is the dom
}


const list = document.getElementsByID('add-form');

const todoList = {
    init(lists) {
        for(let i = 0; i < lists.length; i++) {
            todoList.add(lists[i]);
        }
    },
    add(task) {
        const dom = makeList(task);
        const listItem = dom.querySelector('li');
    
        task.appendChild(dom);
    },
};

export default todoList;