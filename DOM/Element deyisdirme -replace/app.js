const listBody = document.querySelector(".list-group");

const newTitle = document.createElement("h3");

newTitle.className = "title3 text-primary";
newTitle.id = "heading3";
newTitle.innerText = "NEW TITLE";

// old elem
const oldTitle = document.querySelector(".title1");
listBody.replaceChild(newTitle, oldTitle);

console.log(newTitle);



