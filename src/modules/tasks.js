const tasks = () => {
    const tasks = document.createElement('div')
    tasks.classList.add('tasks')

    return tasks
}

const renderTasks = (project) => {
    const tasks = document.querySelector(".tasks")
    for (task of project.todos) {
        const taskDiv = document.createElement('div')
        taskDiv.textContent = ``` ${task.name} ${task.date} ${task.priority}`
        tasks.appendChild(taskDiv)
    }
}

export {tasks, renderTasks}