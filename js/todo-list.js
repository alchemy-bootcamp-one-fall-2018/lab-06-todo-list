
function makeList(item) {
    const html = `
        <li class ="to-do">
        <h3 class="item"> 
        ${makeList.task}
        </h3>
            <h3 class=${new Date(makeList.due) > Date.now() ? 'date' : 'overdue'}> 
            ${item.name} ${item.date} 
            </h3> 
            <div><button class="remove">Done</button></div>
        </li> 
     `;
    
    const template = document.createElement('template');
 
    template.innerHTML = html;

    return template.content;
}
const doneList = document.getElementById('list'); 

const todoList = {
    init(items, onRemove) {
        for(let i = 0; i < items.length; i++) {
            todoList.add(items[i]); 
        }
        todoList.onRemove = onRemove; 
    }, 
    add(item) {
        const dom = makeList(item); 

        const removeButton = dom.querySelector('button'); 
        const listItem = dom.querySelector('li'); 

        removeButton.addEventListener('click', function() {
            todoList.onRemove(item); 
            listItem.remove();
        }); 

        doneList.appendChild(dom);
    }
};

export default todoList; 