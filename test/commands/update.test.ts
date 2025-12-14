import { runCommand } from "@oclif/test";
import { expect, assert } from "chai";
import sharedDbConnection from "../../src/db/ConnectDatabase.js";

describe("update", () => {
  beforeEach(async () => {
    await sharedDbConnection.deleteFrom("todos").execute();
  });

  it("runs update description", async () => {
    const todoId = await sharedDbConnection
      .insertInto("todos")
      .values({
        description: "test todo 1",
        is_end: 0,
      })
      .returning(["id"])
      .executeTakeFirst();

    if (todoId == undefined) {
      assert.equal(todoId, -1, "todoId is undefined.");
      return;
    }

    await runCommand(`update ${todoId.id} -d "updated todo1"`);

    const updatedTodo = await sharedDbConnection
      .selectFrom("todos")
      .selectAll()
      .where("id", "=", todoId.id)
      .executeTakeFirst();

    if (updatedTodo == undefined) {
      assert.equal(updatedTodo, -1, "todo is undefined.");
      return;
    }

    expect(updatedTodo.description).to.equal("updated todo1");
  });

  it("runs update isEnd", async () => {
    const todoId = await sharedDbConnection
      .insertInto("todos")
      .values({
        description: "test todo 1",
        is_end: 0,
      })
      .returning(["id"])
      .executeTakeFirst();

    if (todoId == undefined) {
      assert.equal(todoId, -1, "todoId is undefined.");
      return;
    }

    await runCommand(`update ${todoId.id} -e`);

    const updatedTodo = await sharedDbConnection
      .selectFrom("todos")
      .selectAll()
      .where("id", "=", todoId.id)
      .executeTakeFirst();

    if (updatedTodo == undefined) {
      assert.equal(updatedTodo, -1, "todo is undefined.");
      return;
    }

    expect(updatedTodo.is_end).to.equal(1);
  });
});
