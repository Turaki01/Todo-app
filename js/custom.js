// list of todos
const todos = [{
        text: 'Go to Work',
        completed: true
    },
    {
        text: 'Attend Stand up',
        completed: true
    },
    {
        text: 'Eat food',
        completed: false
    },
    {
        text: 'Commit Code',
        completed: false
    },
    {
        text: 'Close from work',
        completed: false
    },
    {
        text: 'Sleep',
        completed: false
    }
];

const filter = {
    searchText: ''
}


// Function to render todo
const renderTodo = function (todos, filter) {

    const filterTodo = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filter.searchText.toLowerCase());
    });



    document.querySelector('#todo-list').innerHTML = '';

    document.querySelector('#todo-summary').innerHTML = '';

    

    const incompletedTodo = filterTodo.filter((todo) => {
        return !todo.completed
    });

    const summary = document.createElement('h4');
    summary.textContent = `You have ${incompletedTodo.length} todos left`;
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
    })
    
    renderTodo(todos, filter);

    e.target.addTodo.value = '';
});