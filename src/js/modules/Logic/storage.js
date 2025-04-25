const storage = (() => {
    if (!localStorage.getItem("default"))
    {
        localStorage.setItem("default", JSON.stringify({description: "This's the default project", tasks: []}))
    }
    const addProject = project => {
        if (localStorage.getItem(project.title)) {
            throw new Error("there's a project with the same name")
        } else {
            localStorage.setItem(project.title, JSON.stringify({description: project.description, tasks: []}))
        }
    }
    const getProject = title => JSON.parse(localStorage.getItem(title))
    const getAllProjects = () => {
        const all = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            all[key] = JSON.parse(localStorage.getItem(key));
        }
        return all;
    };
    const editProject = (title, newProject) => localStorage.setItem(title, JSON.stringify(newProject))
    const reomveProject = title => localStorage.removeItem(title)
    
    const addTask = (task) => {
        const project = getProject(task.project);
        project.tasks.push(task);
        editProject(task.project, project)
    }
    const getAllTasks = projectName => {
        const project = getProject(projectName)
        return project.tasks
    }
    const getTask = (projectName="default", taskName) => {
        const tasks = getProject(projectName).tasks
        for (let i=0; i < tasks.length; i++) {
            const task = tasks[i];
            if (task.title==taskName) return task;
        }
    }
    const editTask = (projectName="default", task, newTask) => {
        const project = getProject(projectName)
        const tasks  = project.tasks
        tasks.splice(tasks.indexOf(task), 1, newTask)        
    }

    return {
        addProject,
        getProject,
        getAllProjects,
        reomveProject,
        getAllTasks,
        getTask,
        addTask,
        editTask
    }
})();

export default storage;