const addBtn = document.querySelector(".add-btn");
const delBtn = document.querySelector(".del-btn");
const clearBtn = document.querySelector(".clear-btn");

// inputlar
const addkey = document.querySelector(".addkey");
const addvalue = document.querySelector(".addvalue");
const deletekey = document.querySelector(".deletekey");


addBtn.addEventListener("click", addItem);
delBtn.addEventListener("click", delItem);
clearBtn.addEventListener("click", clearItems);

function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value)
}

function delItem(e) {
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(e) {
    sessionStorage.clear();
}