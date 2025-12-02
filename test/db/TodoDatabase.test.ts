import TodoDatabase from "../../src/db/TodoDatabase.js"
import {describe} from "mocha"
import {assert} from "chai"

describe("use database test", async () => {
    const database = new TodoDatabase()

    database.create("test todo1")
    database.create("test todo2")

    const todoList = await database.selectList()
    assert.equal(todoList.todos.length, 2)
    assert.equal(todoList.todos[0].id, "1")
    assert.equal(todoList.todos[0].description, "test todo1")
    assert.equal(todoList.todos[0].isEnd, false)
    assert.notDeepEqual(todoList.todos[0].createdDate, null)
    assert.notDeepEqual(todoList.todos[0].createdDate, undefined)
 
    const todo0 = await database.selectTodo("1")
    assert.equal(todo0?.id, "1")

    await database.update(
        "1",
        "test updated todo1",
        true
    )
    const updatedTodo0= await database.selectTodo("1")
    assert.equal(updatedTodo0?.id, "1")
    assert.equal(updatedTodo0?.description, "test updated todo1")
    assert.equal(updatedTodo0?.isEnd, true)

    await database.delete("1")
    const deletedTodo0 = await database.selectTodo("1")
    assert.equal(deletedTodo0, null)
})
