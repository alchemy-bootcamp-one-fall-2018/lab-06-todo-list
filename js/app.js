import AddToDo from './add-todo.js';
import toDoApi from './todo-api.js';
import ToDoList from './todo-list.js';
import html from './html.js';

const toDos = toDoApi.getAll();

function makeTemplate() {
    return html`
    <main>
        <section id="add-form">
            <h2><u>Add a Task:</u></h2>
        </section>
            
        <section id="toDos">
            <h2><u>List of Tasks:</u></h2>
        </section>

    </main>
    `;
}

class App {
    render() {
        const dom = makeTemplate();
        const addToDoSection = dom.getElementById('add-form');
        const toDoListSection = dom.getElementById('toDos');

        const addToDo = new AddToDo(toDo => {
            toDoApi.add(toDo);
            toDoList.add(toDo);
        });

        const toDoList = new ToDoList(toDos, toDo => {
            const index = toDoApi.remove(toDo);
            toDoList.remove(index);
        });

        addToDoSection.appendChild(addToDo.render());
        toDoListSection.appendChild(toDoList.render());

        return dom;
    }
}

const app = new App();

document.getElementById('root').appendChild(app.render());