import "../css/styles.css";
import "../css/nav.css";
import "../css/main.css";
import storage from "./modules/storage";
import projectCoreFactory from "./modules/project";
import TaskCoreFactory from "./modules/todo";

const def = projectCoreFactory(storage.getProject("default"));
console.log(def);

def.show();

// document.getElementById("defaultProject").addEventListener("click");
