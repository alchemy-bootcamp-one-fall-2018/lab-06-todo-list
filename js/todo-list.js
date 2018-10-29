function makeTodoList(todo){
    const html = /*html*/`
    <li class="taskItem">
        <h3 class="task">
            ${todo.task}
        </h3>
        <p>Due Date:
            ${todo.date}
        </p>
    </li>
`;

//uses template to create DOM for new todo

    const template = document.createElement('template');
    
    template.innerHTML = html;

    return template.content;
}

//creates new list variable 
const list = document.getElementById('tasks');

const todoList = {
    //initialize tasks array and calls back onRemove
    init(tasks, onRemove){
        for(let i = 0; i < tasks.length; i++) {
            todoList.add(tasks[i]);
        }
        todoList.onRemove = onRemove;
    },
    add(task){
        const dom = makeTodoList(task);

        //find the elements before appending
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            todoList.onRemove(task);
            listItem.remove();
        });

        //append to <ul> to empty the fragment
        list.appendChild(dom);
    }
};



export default todoList;