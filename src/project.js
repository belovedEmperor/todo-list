export default class Project {
  #list = [];
  get list() {
    return this.#list;
  }
  set list(value) {
    this.#list = value;
  }

  appendToProject(item) {
    this.#list.push(item);
    if (this.onUpdate) this.onUpdate();
  }
  removeFromProject(index) {
    this.#list.splice(index);
  }
}
