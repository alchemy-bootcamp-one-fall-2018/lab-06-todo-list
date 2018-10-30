import addTo from './add-to.js';
import toDoList from './list.js';
import listApi from './list-api.js';

const lists = listApi.getAll();

toDoList.init(lists, function(list) {
    //this will be the onRemove listener
    listApi.remove(list);
});


addTo.init(function(list) {
//this will be the onAdd listener
//tell the api first
    listApi.add(list);
//then update components
    toDoList.add(list);
});
//fix remove button

