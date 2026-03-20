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
  }
  removeFromProject(index) {
    this.#list.splice(index);
  }
}
