
const tasks = [
    { description: "Buy groceries", completed: false, index: 1 },
    { description: "Walk the dog", completed: true, index: 2 },
    { description: "Do laundry", completed: false, index: 3 },
    { description: "Read a book", completed: false, index: 4 },
  ];

  function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; 

    tasks
      .sort((a, b) => a.index - b.index)
      .forEach((task) => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        const span = document.createElement("span");

        li.appendChild(checkbox);
        li.appendChild(span);

        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        checkbox.checked = task.completed;

        span.classList.add("task-title");
        span.textContent = task.description;

        if (task.completed) {
          span.classList.add("task-completed");
        }

        taskList.appendChild(li);
      });
  }

  window.addEventListener("DOMContentLoaded", () => {
    renderTasks();

    const taskList = document.getElementById("task-list");
    taskList.addEventListener("change", (event) => {
      const checkbox = event.target;
      const taskText = checkbox.nextElementSibling;
      if (checkbox.checked) {
        taskText.classList.add("task-completed");
      } else {
        taskText.classList.remove("task-completed");
      }
    });

    const addBtn = document.getElementById("add-btn");
    const newTaskInput = document.getElementById("new-task");

    addBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const newTaskDescription = newTaskInput.value.trim();
      if (newTaskDescription === "") return;

      const newIndex = tasks.length + 1;
      const newTask = { description: newTaskDescription, completed: false, index: newIndex };
      tasks.push(newTask);

      newTaskInput.value = "";
      renderTasks();
    });
  });
  