// @ts-check

import "./styles.css";
import TodoItem from "./todoItem.js";

const test = new TodoItem();
console.log(test.title);
test.title = "other";
console.log(test.title);
console.log(test.description);
console.log(test.dueDate);
console.log(test.priority);
