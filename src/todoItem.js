export default class TodoItem {
  #title;
  #description;
  #dueDate;
  #priority;

  constructor(title, description, dueDate, priority) {
    this.#title = title || "Untitled Task";
    this.#description = description || "";
    this.#dueDate = dueDate ? new Date(dueDate) : "";
    this.#priority = priority || -1;
  }

  get title() {
    return this.#title;
  }
  set title(value) {
    this.#title = value;
  }
  get description() {
    return this.#description;
  }
  set description(value) {
    this.#description = value;
  }
  get dueDate() {
    return this.#dueDate;
  }
  set dueDate(value) {
    this.#dueDate = value;
  }
  get priority() {
    return this.#priority;
  }
  set priority(value) {
    this.#priority = value;
  }
}
