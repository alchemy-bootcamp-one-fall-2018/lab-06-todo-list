// function makeList(task) {
//     const html = `
//         <li class="task">
//             <h3>{$task.chore}</h3>             //this part makes no sense to me
//             <button class="remove">X</button>
//         </li>
//     `;

//     const template = document.createElement('template');   //create template element to convert string to DOM
//     template.innerHTML = html;                 //assign inner HTML property
//     return template.content;                  //return the content property, which is the dom
// }


// const list = document.getElementsByID('tasks');     //confused as to which id this is for.... ul id?

// const todoList = {
//     init(tasks, onRemove) {
//         for(let i = 0; i < tasks.length; i++) {
//             todoList.add(tasks[i]);
//         }
//     },
//     add(task) {
//         const dom = makeList(task);

//         const removeButton = dom.querySelector('button');
//         const listItem = dom.querySelector('li');
    
//         task.appendChild(dom);
//     },
// };

// export default todoList;  