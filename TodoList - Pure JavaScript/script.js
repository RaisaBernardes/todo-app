'use strict'



const getDatabase = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
const setDatabase = (database) => localStorage.setItem('todoList', JSON.stringify(database));


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
    const database = getDatabase();
    database.forEach ((item, index) => createItem(item.task, item.status, index))
}

const insertItem = (event) => {
    const pressedKey = event.key;
    const text = event.target.value;
    if(pressedKey === 'Enter'){
        const database = getDatabase(); //read database
        database.push ({'task': text, 'status': ''}) //update database
        setDatabase(database); //send information to database
        render();
        event.target.value = '';
    }
}

const removeItem = (index) => {
    const database = getDatabase();
    database.splice (index, 1);
    setDatabase(database);
    render();
}

const updateItem = (index) => {
    const database = getDatabase();
    database[index].status = database[index].status === '' ? 'checked' : '';
    setDatabase(database);
    render();
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