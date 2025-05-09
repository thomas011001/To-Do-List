import storage from "./storage";

function TaskCoreFactory(task) {
  let finished = task.finished || false;

  const title = task.title;

  const setFinished = (v) => (finished = v);

  const show = () => {
    const container = document.querySelector("#projectTasks .container");
    const task = document.createElement("div");
    task.className = "task";
    task.innerHTML = `
			<input type="checkbox" ${finished ? "checked" : ""}>${title}</div>
		`;
    container.appendChild(task);

    // task.querySelector("input").addEventListener("click", {
    // 	finished = !finished

    // 	storage.editTask("default", )
    // });
  };

  return {
    title,
    setFinished,
    show,
  };
}

export default TaskCoreFactory;
