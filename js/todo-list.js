function makeItem(toDo) {
    const html = /*html*/`<li class="${toDo}">${toDo}</li>`;

    // A. Create template element to convert string to DOM
    const template = document.createElement('template');

    // B. Assign innerHTML property
    template.innerHTML = html;

    // C. Return the `content` property which is the dom
    // (In a DocumentFragment)
    return template.content;
}
// const list = document.getElementById('listItems');

const toDoList = {
//     // init
//     // should include:
//     // 1. initial items array
//     // 1. onRemove callback
    init(listItems) {
        for(let i = 0; i < listItems.length; i++) {
            toDoList.add(listItems[i]);
        }
        add(toDo) {
            const dom = makeItem(toDo);
        }
        list.appendChild(dom);
};

export default toDoList;