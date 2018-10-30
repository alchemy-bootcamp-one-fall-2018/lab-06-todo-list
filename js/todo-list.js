
function makeTodo(todo) {
    const html = /*html*/`
      <li class="todo">
          <h3 class="name" >  ${todo.task}
              ${todo.dueDate}
          </h3>
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

const list = document.getElementById('todos');

const todoList = {
    // init
    // should include:
    // 1. initial todos array
    init(todos) {
        for(let i = 0; i < todos.length; i++) {
            todoList.add(todos[i]);
        }
    },
    add(todo) {
        const dom = makeTodo(todo);
      // append to <ul>, this will empty the fragment
        list.appendChild(dom);
    }
};

export default todoList;