/* Сверстать форму с полями пользователя (title, description) и кнопкой “submit”.
При нажатии на submit, данные в виде объекта попадают в массив data и отрисовываются в туду листе.
Сверстать туду лист для отображения данных из массива с данными

При нажатии удалить - удаляете элемент туду листа из массива и перерисовываете туду лист */

'use strict';

const todoList = document.querySelector('.todos');
const todoItem = document.querySelector('.todo-item');

let data = [];

const title = document.querySelector('input[name=title]');
const description = document.querySelector('input[name=description]');

const submitBtn = document.querySelector('button[name=submit]');

const addTodo = () => {
  event.preventDefault(); 
  
  const todo = {
    title: title.value,
    description: description.value,
  };
  
  data.push(todo);

  todoList.innerHTML = "";
  data.forEach((item) => {
    todoList.innerHTML += `
    <div class="todo-item">
    <p>Title: ${item.title}</p>
    <p>Description: ${item.description}</p>
    <button class="button edit" name="edit">Edit</button>
    <button class="button delete" name="remove">Delete</button>
    </div>`;
  });

};

submitBtn.addEventListener('click', addTodo);

const editBtn = document.querySelector('button[name=edit]');

const removeBtn = document.querySelector('button[name=remove]');

const removeOrEditTodo = () => {
  if (event.target.classList.contains('delete')) {
    const delTodo = event.target.closest(".todo-item");
    delTodo.remove();
    data = [];
  }

  if (event.target.textContent === "Edit") {
    const edTodo = event.target.closest(".todo-item");
    const edTodoCont = edTodo.querySelector("p").textContent;
    console.log(edTodoCont)
    edTodo.focus();
    editBtn.innerText = 'Save';
  }
};

todoList.addEventListener("click", removeOrEditTodo);