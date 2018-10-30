function makeTask(tasks) {
    const html = /*html*/`
       <li class="task"> 
    <h3 class="name" style="background: ${tasks.description};">
        ${tasks.name}
    </h3>
    <img src="">
    <button class="danger">X</button>
</li>
`;

const template = document.createElement('template');

template.innerHTML = html;

return template.content;

const tasklist = {

init(tasks, onRemove) {
    for(let i=0; i < tasks.length; i++) {
        tasklist.onRemove = onRemove;
    }
add(tasks) {
    const dom = makeTask(tasks);
    const removeButton = dom.querySelector('button');
    const listItem = dom.querySelector(li);

    removeButton.addEventListener('click', function() {
        tasklist.onRemove(tasks);
        listItem.remove();

    });
    listItem.appendChild(dom);
}
};

export default tasklist;


}