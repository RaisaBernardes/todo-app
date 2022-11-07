'use strict'

let database = [
    {'task': 'Task 1', 'status': ''},
    {'task': 'Task 2', 'status': 'checked'},
    {'task': 'Task 3', 'status': 'checked'}
]

const createItem = (text, status, index) =>{
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-index=${index}>
        <div>${text}</div>
        <input type="button" value="x" data-index=${index}>
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
    database.forEach ((item, index) => createItem(item.task, item.status, index))
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

const removeItem = (index) => {
    database.splice (index, 1);
    render();
}

const updateItem = (index) => {
    if(database[index].status === ''){
        database[index].status = 'checked';
        render();
    }else{
        database[index].status = '';
        render();
    }
    //database[index].status = database[index].status === '' ? 'checked' : '';
    //render();
}

//atualizando banco após interação com a interface
const clickItem = (event) => {
    const element = event.target; //returns html element that was clicked
    if (element.type === 'button'){
        const index = element.dataset.index; //getting the "data-index" property
        removeItem(index);
    } else if(element.type === 'checkbox'){
        const index = element.dataset.index; 
        updateItem(index);
    }
}

document.querySelector('#newItem').addEventListener('keypress', insertItem)
document.querySelector('#todoList').addEventListener('click', clickItem)



render();
render();
render();