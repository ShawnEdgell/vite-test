import './style.css';

const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

addTodoButton.addEventListener('click', () => {
  const inputValue = todoInput.value.trim();

  if (inputValue) {
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = inputValue;
    li.appendChild(textSpan);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.className = 'removeBtn';
    removeButton.addEventListener('click', () => {
      todoList.removeChild(li);
    });
    li.appendChild(removeButton);

    todoList.appendChild(li);
    todoInput.value = '';
  }
});
