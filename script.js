const addlist = () => {
  const taskName = document.getElementById("skill-name");
  const addTodoButton = document.getElementById("add-skill");
  const clearButton = document.getElementById("clear-list");
  const todoListUl = document.getElementById("skill-list");

  addTodoButton.addEventListener("click", (event) => {
    event.preventDefault(); 

    if (taskName.value != "") {
      const newTask = document.createElement("li");
      newTask.textContent = taskName.value;
      todoListUl.append(newTask);
      taskName.value = "";
    }
  });

  clearButton.addEventListener("click", (event) => {
    event.preventDefault(); 

    todoListUl.innerHTML = "";
  });
};

document.addEventListener("DOMContentLoaded", (event) => {
  addlist();
});
