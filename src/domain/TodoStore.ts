import Todo from "./Todo.js";
import TodoList from "./TodoList.js";

export default interface TodoStore {
    create(description: string): void
    selectList(): TodoList
    selectTodo(id: string): Todo | null
    update(id: string, description: string, isEnd: boolean): void
    delete(id: string): void
}