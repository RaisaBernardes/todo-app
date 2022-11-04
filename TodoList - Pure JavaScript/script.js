'use strict'

let database = [
    {'task': 'Task 1', 'status': ''},
    {'task': 'Task 2', 'status': 'checked'},
    {'task': 'Task 3', 'status': 'checked'}
]

const createItem = (text, status) =>{
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${text}</div>
        <input type="button" value="x">
    `
    document.getElementById('todoList').appendChild(item);
}

const cleanTasks  = () => {
    const todoList = document.querySelector('#todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const render = () => {
    cleanTasks();
    database.forEach (item => createItem(item.task, item.status))
}

const insertItem = (event) => {
    const pressedKey = event.key;
    const text = event.target.value;
    if(pressedKey === 'Enter'){
        database.push ({'task': text, 'status': ''})
        render();
        event.target.value = '';
    }
}

document.querySelector('#newItem').addEventListener('keypress', insertItem)



render();
render();
render();