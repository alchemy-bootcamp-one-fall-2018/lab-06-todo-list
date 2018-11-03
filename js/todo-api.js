// let tasks = [
//     {
//         task: 'wash dog',
//         due: '10/30/18'
//     },
//     {
//         task: 'laundry',
//         due: '11/01/18'
//     }
// ];

// function saveTasks() {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// const taskApi = {
//     getAll() {
//         const json = localStorage.getItem('tasks');
//         if(json) {
//             tasks = JSON.parse(json);
//         }
//         return tasks;
//     },                      
//     add(task) {
//         tasks.push(task);
//         saveTasks();
//     },
//     remove(task) {
//         const index = tasks.indexOf(task);
//         if(index !== -1) {
//             tasks.splice(index, 1);
//             saveTasks();
//         }
//     }
// };

// export default taskApi;