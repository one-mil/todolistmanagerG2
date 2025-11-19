function renderTasks() {
    taskList.innerHTML = ''; // Clear existing list

    tasks.forEach((task, index) => {
        // 1. Create the <li> element
        const listItem = document.createElement('li');
        
        // 2. Set the task text and completed class
        listItem.textContent = task.text;
        if (task.completed) {
            listItem.classList.add('completed');
        }
        
        // 3. Create the checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        // Event: Mark task as completed
        checkbox.addEventListener('change', () => {
            toggleTaskCompleted(index);
        });

        // 4. Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        // Event: Delete task
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });

        // 5. Assemble the structure and add to the list
        listItem.prepend(checkbox); // Put the checkbox before the text
        listItem.appendChild(deleteButton); 
        taskList.appendChild(listItem);
    });
    
    updateCounts(); // Update the counts after rendering
}