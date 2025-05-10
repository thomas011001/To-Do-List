import TaskCoreFactory from "./todo";
import storage from "./storage";

function projectCoreFactory(project) {
  const title = project.title;

  const description = project.description;

  const tasks = project.tasks || [];

  const show = () => {
    const container = document.getElementById("tasks");
    container.innerHTML = `
    <h1><div class="container">Default</div></h1>
    <p><div class="container"> This is the default project for you.</div></p>
    <div id="projectTasks" class="project-tasks">
      <div class="container">

      </div>
    </div>
    <div class="container">
      <input type="text" id="taskName"/>
      <button id="addTask">
        + New Task
      </button>
    </div>
    `;

    document.getElementById("addTask").addEventListener("click", () => {
      const taskTitle = document.getElementById("taskName").value;
      if (!taskTitle) return;
      document.getElementById("taskName").value = "";
      project = title;

      const task = { title: taskTitle, project };

      storage.addTask(task);
    });

    tasks.forEach((task) => TaskCoreFactory(task).show());
  };

  return {
    title,
    description,
    tasks,
    show,
  };
}

export default projectCoreFactory;
