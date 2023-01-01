import {renderTasks, tasks} from "./tasks";

const project = () => {
    const todos = []

    const addTodo = (task) => {
        todos.push(task)
    }

    return {todos, addTodo}
}

const todo = (name, date, priority) => {
    let checked = false

    const toggleCheck = () => {
        checked = !checked
    }

    return {name, date, priority, checked, toggleCheck}
}

const test = project()
test.addTodo(todo('test', 1, 'test'))
renderTasks(test)

export {project, todo}