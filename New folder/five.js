function updateCounts() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;

    totalCountSpan.textContent = total;
    completedCountSpan.textContent = completed;
}