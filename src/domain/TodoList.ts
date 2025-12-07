import Todo from "./Todo.js";

export default class TodoList {
  todos: Todo[];

  constructor(todos: Todo[]) {
    this.todos = todos;
  }

  displayString(): string {
    return this.todos.reduce(
      (str, todo) => str + todo.displayString() + "\n",
      "",
    );
  }
}
