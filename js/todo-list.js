function makeItem(toDo) {
    const html = /*html*/`
        <li class="task">
            <h3 class="item">
                ${toDo.todo}
                ${toDo.date}
            </h3>
        </li>
    `;
// date is not showing - line 6 was toDo.due
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('listItems');

const toDoList = {
//     // init
//     // should include:
//     // 1. initial items array
//     // 1. onRemove callback
    init(listItems, onRemove) { //was fruits??
        for(let i = 0; i < listItems.length; i++) {
            toDoList.add(listItems[i]);
        }
        toDoList.onRemove = onRemove;
    },
    add(toDo) {
        const dom = makeItem(toDo);
//        const listItem = dom.querySelector('li');

        list.appendChild(dom);
    }
};

export default toDoList;