// Mark tasks as completed
function toggleTaskCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Delete tasks individually
function deleteTask(index) {
    tasks.splice(index, 1); // Remove 1 element at the given index
    renderTasks();
}