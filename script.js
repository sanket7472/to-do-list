let todoList = [];



function add(){
    const inputElement = document.getElementById('input-todo');
    todoList.push(inputElement.value);
    
    localStorage.setItem("todoList", JSON.stringify(todoList));
    inputElement.value = "";

    renderToDoList();
}

function renderToDoList(){
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = "";

    for(const todoItem of todoList)
    {
        listContainer.innerHTML += `<div class="todoItem">
            <input type="checkbox">
            ${todoItem}</div>` ;
    }
}