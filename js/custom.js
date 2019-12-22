// list of todos
const todo = [{
        text: 'Go to Work',
        completed: true
    },
    {
        text: 'Attend Stand up',
        completed: true
    },
    {
        todo: 'Eat food',
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
]


// Function to render todo
const renderTodo = function (todo) {
    todo.forEach((todo, index) => {

        // adding todos to the DOM
        const todoEl = document.querySelector('#todo-list');
        const todoItem = document.createElement('p');
        todoItem.textContent = `${index + 1}  ${todo.text}`;

        todoEl.appendChild(todoItem);
    });


}

renderTodo(todo);


// Input event on the input field to filter todo
document.querySelector('#searchText').addEventListener('input', (e) => {
    console.log(e.target.value)
});