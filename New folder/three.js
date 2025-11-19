taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop the form from submitting and refreshing the page
    const text = taskInput.value.trim();

    if (text) {
        // Add a new task object to the array
        tasks.push({ text: text, completed: false });
        taskInput.value = ''; // Clear the input field
        renderTasks(); // Re-render the list
    }
});