import Todo from "./Todo.js";
import TodoList from "./TodoList.js";
import TodoStore from "./TodoStore.js";

export default class TodoStoreOperation {
    store: TodoStore

    constructor(store: TodoStore) {
        this.store = store
    }

    createTodo(description: string) {
        this.store.create(description)
    }

    selectList(): TodoList{
        return this.store.selectList()
    }

    selectTodo(id: string): Todo | null {
        return this.store.selectTodo(id)
    }

    deleteTodo(id: string) {
        this.store.delete(id)
    }

    update(id: string, description: string, isEnd: boolean) {
        try {
            this.store.update(id, description, isEnd)
        }catch (e) {
            throw e
        }
     }
}

