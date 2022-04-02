const todolist = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");

// todos[3].remove();
// todolist.removeChild(todolist.lastElementChild);

todolist.removeChild(todos[todos.length-1]);

