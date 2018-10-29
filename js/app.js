import addItem from './add-todo.js';
import todoList from './todo-list.js';
import itemsApi from './todo-api.js'; 

const items = itemsApi.getAll(); 
console.log(items);

todoList.init(items, function(item){
    itemsApi.remove(item);
});

addItem.init(function(item) {
    itemsApi.add(item); 
    
    console.log('hello');
    todoList.add(item); 

}); 