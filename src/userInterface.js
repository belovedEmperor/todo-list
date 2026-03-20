export default class userInterface {
  updateTasks(tasks) {
    const tasksDiv = document.querySelector(".tasks");
    for (const task of tasks) {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      taskDiv.innerHTML = `
        <p>${task.title}</p>
        <p>${task.description}</p>
        <p>${task.dueDate}</p>
        <p>${task.priority}</p>
        <p>${task.isDone}</p>
        `;
      tasksDiv.append(taskDiv);
    }
  }
}
