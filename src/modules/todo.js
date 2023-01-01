const todo = (name, date, priority) => {
    let checked = false

    const toggleCheck = () => {
        checked = !checked
    }

    return {name, date, priority, checked, toggleCheck}
}

export default todo