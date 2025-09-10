import Todo from "./Todo.js";

export default class TodoList {
    todos: Todo[]

    constructor(todos: Todo[]) {
        this.todos = todos
    }

    displaystring(): string{
        return this.todos.reduce(
            (str, todo) => str + todo.displaystring() + "\n",
            ""
        )
    }
}