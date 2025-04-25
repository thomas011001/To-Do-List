function TaskCoreFactory(title, description, priority, project) {
    let finished = false;
    const getFinished = () => finished
    const setFinished = V => finished = V
    return {
        title,
        description,
        priority,
        project,
        setFinished,
        getFinished
    }
}

