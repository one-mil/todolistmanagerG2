// Get DOM elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const totalCountSpan = document.getElementById('total-count');
const completedCountSpan = document.getElementById('completed-count');

// The main array to hold task objects
let tasks = [];