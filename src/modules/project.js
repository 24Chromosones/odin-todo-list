const project = () => {
    const todos = []

    const addTodo = (task) => {
        todos.push(task)
    }

    return {todos, addTodo}
}

export default project