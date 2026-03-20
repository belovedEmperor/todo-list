// @ts-check

import Project from "./project.js";
import "./styles.css";
import TodoItem from "./todoItem.js";
import userInterface from "./userInterface.js";

const test = new TodoItem("test", {
  description: "test desc",
  dueDate: "2026-03-15",
  priority: TodoItem.PRIORITY.low,
});
console.log(test.title);
console.log(test.description);
console.log(test.dueDate);
console.log(test.priority);
const test2 = new TodoItem("test", {
  description: "test desc",
  dueDate: "2026-03-15",
  priority: TodoItem.PRIORITY.low,
});

const defaultProject = new Project();
defaultProject.appendToProject(test);
defaultProject.appendToProject(test2);

const ui = new userInterface();
ui.render(defaultProject);
