export default class userInterface {
  render(project) {
    const container = document.querySelector(".tasks");
    container.innerHTML = "";

    project.list.forEach((task, index) => {
      const element = this.createTaskElement(task, index);
      container.append(element);
    });
  }

  createTaskElement(task, index) {
    const div = document.createElement("div");
    div.classList.add("task", "task-open");

    div.append(
      this.createTaskHeader(task),
      this.createTaskInfo(task),
      this.createDeleteButton(index),
      this.createOpenButton(),
    );

    return div;
  }

  createTaskHeader(task) {
    const div = document.createElement("div");
    div.classList.add("task-header");
    const title = document.createElement("p");
    const date = document.createElement("p");
    title.textContent = task.title;
    date.textContent = task.dueDate;
    div.append(title, date);
    return div;
  }

  createTaskInfo(task) {
    const div = document.createElement("div");
    div.classList.add("task-info");
    const description = document.createElement("p");
    const priority = document.createElement("p");
    description.textContent = task.description;
    priority.textContent = task.priority;
    div.append(description, priority);
    return div;
  }

  createDeleteButton(index) {
    const button = document.createElement("button");
    button.classList.add("delete-button");
    button.textContent = "X";
    button.dataset.index = index;
    return button;
  }

  createOpenButton() {
    const button = document.createElement("button");
    button.classList.add("open-button");
    button.addEventListener("click", () => toggleTaskOpen);
    return button;
  }

  toggleTaskOpen() {
    const taskInfoDiv = document.querySelector(".task-info");
    taskInfoDiv.remove();
  }
}
