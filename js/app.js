import addItem from './add-todo.js';
import todoList from './todo-list.js';
import itemApi from './todo-api.js'; 

const items = itemApi.getAll(); 

todoList.init(items, function(item){

    itemApi.remove(item);
});

addItem.init(function(item) {
    itemApi.add(item); 

    todoList.add(item); 

}); 