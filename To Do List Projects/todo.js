const addBtn = document.querySelector("#addBtn");
const clearBtn = document.querySelector("#clear-todos");
// form
const form = document.querySelector("#todo-form");

const firstcardBody =  document.querySelectorAll(".card-body")[0];
const secondcardBody =  document.querySelectorAll(".card-body")[1];

// filter input
const filter = document.querySelector("#filter");

// todo input
const todoInput = document.querySelector("#todo");

// list-ul
const todoList = document.querySelector(".list-group");

eventListeners();

function eventListeners() { //butun event listenerler

    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadedToDos);

    secondcardBody.addEventListener("click", deleteTodo); //romeve todo
    clearBtn.addEventListener("click", clearTodos); //cleartodoItems

};

function clearTodos(e) {

   
    if (confirm("Bütün todoları silmək istəyirsiz?")) {

        // todoList.innerHTML = ""; //yavas duzgun deyil o qederde kicik islerde istifade etmek olar

        while(todoList.firstElementChild != null){
                todoList.removeChild(todoList.firstElementChild);
        }

        localStorage.removeItem("todos");
    }
}

function deleteTodo(e) {
    if (e.target.className == "fa fa-remove") {
        
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Uğurla silindi..");
    }
}

// localstorageden todolari silmek ucun
function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo, index) {
        if (todo == deletetodo) {
            todos.splice(index,1);
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadedToDos() { // seyfe refres olunandan sonra todolar seyfede qalsin
    let todos = getTodosFromStorage();

    todos.forEach(newTodo => {
        addToDoToUI(newTodo);
    });
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();
    

    if (todoInput.value == "") {
        showAlert("danger", "Zəhmət olmasa bir mesaj daxil edin..");
    }
    else{
        addToDoToUI(newTodo);
        adTodoToStorage(newTodo); //local storage daxil etmek
        showAlert("success", "Uğurla daxil oldu...");
    }

   

    e.preventDefault();
}


function showAlert(type, message) {
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstcardBody.appendChild(alert);

    setTimeout(function () {
        alert.remove();
    }, 1200)
}

function getTodosFromStorage() { //storageden butun todolari alir
    let todos;

    if (localStorage.getItem("todos") === null) {
       todos = [];   
    }
    else{ //varsa todos keyi arrayi
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function adTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
}


function addToDoToUI(newTodo) {
    // list Item yaratmaq
    const listItem = document.createElement("li");
    listItem.classList="list-group-item d-flex justify-content-between";

    // link yaratmaq
    const link = document.createElement("a");
    link.href = "#";
    link.className= "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>" ;
    

    listItem.style.margin = "5px 0";
    listItem.style.border = "1px solid gray";
    listItem.style.textTransform = "Capitalize";

    // text Node daxil etmek
   listItem.appendChild(document.createTextNode(newTodo));
   listItem.appendChild(link);

   // ul-e daxil etmek
   todoList.appendChild(listItem);
   todoInput.value = "";

   

    
    
}