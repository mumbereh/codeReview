/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nconst tasks = [\r\n    { description: \"Buy groceries\", completed: false, index: 1 },\r\n    { description: \"Walk the dog\", completed: true, index: 2 },\r\n    { description: \"Do laundry\", completed: false, index: 3 },\r\n    { description: \"Read a book\", completed: false, index: 4 },\r\n  ];\r\n\r\n  function renderTasks() {\r\n    const taskList = document.getElementById(\"task-list\");\r\n    taskList.innerHTML = \"\"; \r\n\r\n    tasks\r\n      .sort((a, b) => a.index - b.index)\r\n      .forEach((task) => {\r\n        const li = document.createElement(\"li\");\r\n        const checkbox = document.createElement(\"input\");\r\n        const span = document.createElement(\"span\");\r\n\r\n        li.appendChild(checkbox);\r\n        li.appendChild(span);\r\n\r\n        checkbox.type = \"checkbox\";\r\n        checkbox.classList.add(\"task-checkbox\");\r\n        checkbox.checked = task.completed;\r\n\r\n        span.classList.add(\"task-title\");\r\n        span.textContent = task.description;\r\n\r\n        if (task.completed) {\r\n          span.classList.add(\"task-completed\");\r\n        }\r\n\r\n        taskList.appendChild(li);\r\n      });\r\n  }\r\n\r\n  window.addEventListener(\"DOMContentLoaded\", () => {\r\n    renderTasks();\r\n\r\n    const taskList = document.getElementById(\"task-list\");\r\n    taskList.addEventListener(\"change\", (event) => {\r\n      const checkbox = event.target;\r\n      const taskText = checkbox.nextElementSibling;\r\n      if (checkbox.checked) {\r\n        taskText.classList.add(\"task-completed\");\r\n      } else {\r\n        taskText.classList.remove(\"task-completed\");\r\n      }\r\n    });\r\n\r\n    const addBtn = document.getElementById(\"add-btn\");\r\n    const newTaskInput = document.getElementById(\"new-task\");\r\n\r\n    addBtn.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      const newTaskDescription = newTaskInput.value.trim();\r\n      if (newTaskDescription === \"\") return;\r\n\r\n      const newIndex = tasks.length + 1;\r\n      const newTask = { description: newTaskDescription, completed: false, index: newIndex };\r\n      tasks.push(newTask);\r\n\r\n      newTaskInput.value = \"\";\r\n      renderTasks();\r\n    });\r\n  });\r\n  \n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);