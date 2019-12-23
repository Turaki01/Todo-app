// list of todos
let todos = [];

const filter = {
    searchText: ''
}


const todoJSON = localStorage.getItem('todos');

if(todoJSON !== null) {
    todos = JSON.parse(todoJSON);
}


// Function to render todo
const renderTodo = function (todos, filter) {

    if (todos.length > 0) {
        document.querySelector('#hasTodo').classList.add('d-block');
        document.querySelector('#emptyState').classList.add('d-none');
        document.querySelector('#emptyState').classList.remove('d-block');
    } else {
        document.querySelector('#hasTodo').classList.add('d-none');
        document.querySelector('#emptyState').classList.add('d-block');
        document.querySelector('#hasTodo').classList.remove('d-block');
    }

    //filter function
    const filterTodo = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filter.searchText.toLowerCase());
    });



    document.querySelector('#todo-list').innerHTML = '';

    document.querySelector('#todo-summary').innerHTML = '';



    const incompletedTodo = filterTodo.filter((todo) => {
        return !todo.completed
    });

    const summary = document.createElement('h4');
    summary.textContent = `You have ${incompletedTodo.length} todo${incompletedTodo.length > 1 ? 's' : ''} left`;
    document.querySelector('#todo-summary').appendChild(summary);

    filterTodo.forEach((todo, index) => {

        // adding todos to the DOM
        const todoEl = document.createElement('p');

        todoEl.textContent = `${index + 1}  ${todo.text}`;

        document.querySelector('#todo-list').appendChild(todoEl);

    });


}

renderTodo(todos, filter);


// Input event on the input field to filter todo
document.querySelector('#searchText').addEventListener('input', (e) => {
    filter.searchText = e.target.value;
    renderTodo(todos, filter)
});

// submit event on the add todo form
document.querySelector('#addTodoForm').addEventListener('submit', (e) => {

    e.preventDefault();
    todos.push({
        text: e.target.addTodo.value,
        completed: false
    });

    localStorage.setItem('todos', JSON.stringify(todos));


    renderTodo(todos, filter);

    e.target.addTodo.value = '';
});

// remove all todo
document.querySelector('#remove-all').addEventListener('click', (e) => {
    if (e) {
        todos = [];
        localStorage.removeItem('todos');
    }

    renderTodo(todos, filter);
});