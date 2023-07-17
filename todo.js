let inputField = document.getElementById("input");
let addBtn = document.getElementById("btn");
let main = document.querySelector("main");

addBtn.addEventListener("click", () => {
  if (inputField.value === "") {
    alert("add a task first.");
  } else {
    let addedInput = document.createElement("input");
    addedInput.type = "text";
    addedInput.id = "task";
    addedInput.value = inputField.value;
    addedInput.setAttribute("readonly", "readonly");

    let edit_icon = document.createElement("i");
    edit_icon.setAttribute("class", "fa-sharp fa-solid fa-pen-to-square");  

    edit_icon.addEventListener("click", () => {
      if (addedInput.hasAttribute("readonly")) {
        tasksDiv.style.border = "2px solid black";
        addedInput.removeAttribute("readonly", "readonly");
        edit_icon.setAttribute("class", "fa-solid fa-check");
      } else {
        tasksDiv.style.border = "none";
        addedInput.setAttribute("readonly", "readonly");
        edit_icon.setAttribute("class", "fa-sharp fa-solid fa-pen-to-square");
      }
    });

    let delete_icon = document.createElement("i");
    delete_icon.setAttribute("class", "fa-solid fa-xmark");

    delete_icon.addEventListener('click', () => {
        delete_icon.parentElement.remove();
    })

    let tasksDiv = document.createElement("div");
    tasksDiv.classList.add("tasks");

    tasksDiv.appendChild(addedInput);
    tasksDiv.appendChild(edit_icon);
    tasksDiv.appendChild(delete_icon);

    main.appendChild(tasksDiv);

    inputField.value = "";
  }
});

