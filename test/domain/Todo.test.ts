import { describe } from "mocha";
import Todo from "../../src/domain/Todo";
import { assert } from "chai";

describe("Todo displayString", () => {
  const todo = new Todo("1", "test todo", false, new Date());

  assert.equal(todo.displaystring(), "[ ] 1: test todo");

  const endTodo = new Todo("1", "test todo", true, new Date());

  assert.equal(endTodo.displaystring(), "[x] 1: test todo");
});
