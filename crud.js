
// Function to render tasks from local storage
function renderTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
  }
  
  // Function to save tasks to local storage
  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Function to render tasks in the UI
  function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
  
    const tasks = renderTasksFromLocalStorage();
  
    tasks
      .sort((a, b) => a.index - b.index)
      .forEach((task) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const span = document.createElement('span');
        const updateBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
  
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(updateBtn);
        li.appendChild(deleteBtn);
  
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        checkbox.checked = task.completed;
  
        span.classList.add('task-title');
        span.textContent = task.description;
  
        updateBtn.classList.add('update-btn');
        updateBtn.textContent = 'Update';
  
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
  
        if (task.completed) {
          span.classList.add('task-completed');
        }
  
        taskList.appendChild(li);
      });
  }
  
  // Function to handle form submission and add a new task
  function addNewTask() {
    const taskInput = document.getElementById('task-input');
    const taskTitle = taskInput.value.trim();
  
    if (taskTitle !== '') {
      const tasks = renderTasksFromLocalStorage();
      const newIndex = tasks.length > 0 ? tasks[tasks.length - 1].index + 1 : 1;
      const newTask = { description: taskTitle, completed: false, index: newIndex };
      tasks.push(newTask);
  
      saveTasksToLocalStorage(tasks);
      taskInput.value = '';
      renderTasks();
    }
  }
  
  // Function to update a task's title
  function updateTaskTitle(taskElement) {
    const taskTitleElement = taskElement.querySelector('.task-title');
    const newTitle = prompt('Enter new task title:', taskTitleElement.textContent);
    if (newTitle !== null && newTitle !== '') {
      taskTitleElement.textContent = newTitle;
      const tasks = renderTasksFromLocalStorage();
      const taskId = parseInt(taskElement.dataset.taskId);
      const taskToUpdate = tasks.find((task) => task.index === taskId);
      if (taskToUpdate) {
        taskToUpdate.description = newTitle;
        saveTasksToLocalStorage(tasks);
      }
    }
  }
  
  // Function to delete a task
  function deleteTask(taskElement) {
    const taskId = parseInt(taskElement.dataset.taskId);
    const tasks = renderTasksFromLocalStorage();
    const updatedTasks = tasks.filter((task) => task.index !== taskId);
    saveTasksToLocalStorage(updatedTasks);
    renderTasks();
  }
  
  // Event listener to handle form submission
  const taskForm = document.getElementById('task-form');
  taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addNewTask();
  });
  
  // Event listener to handle updates and deletions
  const taskList = document.getElementById('task-list');
  taskList.addEventListener('click', function (event) {
    const targetElement = event.target;
    const taskElement = targetElement.closest('li');
  
    if (targetElement.classList.contains('update-btn')) {
      updateTaskTitle(taskElement);
    } else if (targetElement.classList.contains('delete-btn')) {
      deleteTask(taskElement);
    }
  });
  
  // Run this code when the DOM is loaded
  window.addEventListener('DOMContentLoaded', () => {
    renderTasks();
  });
  