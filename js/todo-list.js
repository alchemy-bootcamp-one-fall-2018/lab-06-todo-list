

// creates the in template in the HTML doc

function makeTask(task) {
    const html = /*html*/`
        <li class="createTasks">
            <p> 
                ${task.item}
            </p>
            <p>
                ${task.date}
            </p>
            <button class="remove">Delete Task</button>
        </li>
        `; 


        // command to create html to be placed in the template into the HTML doc
    const template = document.createElement('template');
        // command to actually place the template in the HTML doc
    template.innerHTML = html;
        // 
    return template.content;

}

const list = document.getElementById('task-list');

const taskList = {

    init(task, onRemove){

        for(let i = 0; i < task.length; i++){

            taskList.add(task[i]);
        }
        taskList.onRemove = onRemove;
    },
    add(task) {
        const dom = makeTask(task);
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            taskList.onRemove(task);
            listItem.remove();
        });

        list.appendChild(dom);


        var getId = document.getElementByClassName('createTasks');
        var currentDate = new Date();
        var dueDateStuff = new Date(task.date);
        for(var i = 0; i < getId.length; i++) {
            if(getId !== null && dueDateStuff < currentDate) {
                getId[i].classList.add('past-Due');
            }

        }
        
    }
};

export default taskList;