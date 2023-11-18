document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');

    fetch('/api/tasks')
        .then(response => response.json())
        .then(tasks => {
            tasks.forEach(task => {
                const taskElement = document.createElement('p');
                taskElement.textContent = `${task.title} - ${task.completed ? 'Concluída' : 'Pendente'}`;
                taskList.appendChild(taskElement);
            });
        })
        .catch(error => console.error('Erro ao carregar tarefas:', error));
});