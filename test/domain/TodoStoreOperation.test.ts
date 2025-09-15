import { describe } from "mocha"
import { assert } from "chai"
import Todo from "../../src/domain/Todo"
import TodoList from "../../src/domain/TodoList"
import TodoStoreOperation from "../../src/domain/TodoStoreOperation.js"
import TodoStore from "../../src/domain/TodoStore"

type StoredTodosType = { 
    [index: string]: Todo 
}

class TodoDataStoreStub implements TodoStore {
    storedTodos: StoredTodosType = {}
    
    create(description: string): void {
        const id = "" + Object.keys(this.storedTodos).length
        const todo = new Todo(
            id,
            description,
            false,
            new Date()
        )

        this.storedTodos[id] = todo
    }

    selectList(): TodoList {
        const todos = Object.values(this.storedTodos)
        return new TodoList(todos)
    }

    selectTodo(id: string): Todo | null {
        const todo = this.storedTodos[id]
        if (todo === undefined) {
            return null
        }
        return todo
    }

    update(id: string, description: string, isEnd: boolean): void {
        const todo = this.storedTodos[id]
        if (todo === undefined) {
            throw Error("Todo associated with this id don't exist.")
        }

        todo.description = description
        todo.isEnd = isEnd
        this.storedTodos[id] = todo
    }

    delete(id: string): void {
        delete this.storedTodos[id]
    }
}

describe("update test", () => {
    const store = new TodoDataStoreStub()
    store.create("test todo")
    assert.equal(Object.keys(store.storedTodos).length, 1)
    console.log(Object.keys(store.storedTodos))
    assert.equal(store.storedTodos["0"].description, "test todo")
    assert.equal(store.storedTodos["0"].isEnd, false)

    const operations = new TodoStoreOperation(store)

    operations.update("0", "updated test todo", false)
    assert.equal(store.storedTodos["0"].description, "updated test todo")

    operations.update("0", "udpated test todo", true)
    assert.equal(store.storedTodos["0"].isEnd, true)
})

describe("update error test", () => {
    const store = new TodoDataStoreStub()
    const operations = new TodoStoreOperation(store)

    assert.throw(
        function() {
            operations.update("0", "updated test todo", false)
        },
        "Todo associated with this id don't exist."
    )
})