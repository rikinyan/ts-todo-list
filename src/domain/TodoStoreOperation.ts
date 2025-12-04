import Todo from "./Todo.js";
import TodoList from "./TodoList.js";
import TodoStore from "./TodoStore.js";

export default class TodoStoreOperation {
  store: TodoStore;

  constructor(store: TodoStore) {
    this.store = store;
  }

  createTodo(description: string) {
    this.store.create(description);
  }

  async selectList(): Promise<TodoList> {
    return await this.store.selectList();
  }

  async selectTodo(id: string): Promise<Todo | null> {
    return await this.store.selectTodo(id);
  }

  async deleteTodo(id: string) {
    await this.store.delete(id);
  }

  async update(id: string, description: string, isEnd: boolean) {
    try {
      await this.store.update(id, description, isEnd);
    } catch (e) {
      throw e;
    }
  }
}
