
const sidebar = () => {
    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')

    const title = document.createElement("h1")
    title.classList.add('todo-list')
    title.textContent = 'Todo List'

    const header = document.createElement("h2")
    header.classList.add('projects')
    header.textContent = 'Projects'

    const projectsDiv = document.createElement('div')

    const addProject = document.createElement('form')
    const projectInput = document.createElement('input')
    addProject.addEventListener('submit', ev => {
        ev.preventDefault()
    })

    projectInput.addEventListener('keyup', ev => {
        if (ev.key === "Enter") {
            ev.target.value = ""
        }
    })

    addProject.appendChild(projectInput)

    sidebar.appendChild(title)
    sidebar.appendChild(header)
    sidebar.appendChild(projectsDiv)
    sidebar.appendChild(addProject)
    return sidebar
}


export default sidebar