export default class TodoItem {
  static PRIORITY = {
    low: "low",
    medium: "medium",
    high: "high",
  };

  #title;
  #description;
  #dueDate;
  #priority;

  constructor(title, options = {}) {
    this.#title = title || "Untitled Task";
    this.#description = options.description || "";
    this.setDueDate(options.dueDate) || "";
    this.#priority = options.priority || -1;
  }

  get title() {
    return this.#title;
  }
  set title(value) {
    this.#title = value;
    return true;
  }
  get description() {
    return this.#description;
  }
  set description(value) {
    this.#description = value;
    return true;
  }

  get dueDate() {
    return this.#dueDate;
  }
  setDueDate(date) {
    const newDate = new Date(date);
    if (!isNaN(newDate.valueOf())) {
      this.#dueDate = newDate;
      return true;
    }
    return false;
  }

  get priority() {
    return this.#priority;
  }
  set priority(priority) {
    if (priority in this.PRIORITY) {
      this.#priority = priority;
      return true;
    }
    return false;
  }
}
