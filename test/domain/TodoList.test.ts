import {describe} from "mocha"
import Todo from "../../src/domain/Todo"
import TodoList from "../../src/domain/TodoList"
import { assert } from "chai"

describe("TodoList displayString", () => {
    const todo1 = new Todo(
        "1",
        "test todo1",
        false,
        new Date()
    )

    const todo2 = new Todo(
        "2",
        "test todo2",
        true,
        new Date()
    )

    const todoList = new TodoList(
        [todo1, todo2]
    )

    assert.equal(
        todoList.displaystring(),
        `[ ] 1: test todo1\n[x] 2: test todo2\n`
    )
})
