import Todo from "./Todo.js";
import TodoList from "./TodoList.js";

export default interface TodoStore {
    create(description: string): void
    selectList(): Promise<TodoList> 
    selectTodo(id: string): Promise<Todo | null> 
    update(id: string, description: string, isEnd: boolean): Promise<void> 
    delete(id: string): Promise<void>
}