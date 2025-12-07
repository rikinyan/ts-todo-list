import { runCommand } from "@oclif/test";
import { sharedDbConnection } from "../../src/db/ConnectDatabase.js";
import { expect } from "chai";

describe("list", () => {
  beforeEach(async () => {
    await sharedDbConnection.deleteFrom("todos").execute();
  });

  it("runs list cmd", async () => {
    await runCommand('add "todo1"');
    await runCommand('add "todo2"');

    const { stdout } = await runCommand("list");
    console.log(stdout);
    expect(stdout).to.match(/\[ \] \d*: todo1\n\[ \] \d*: todo2\n\n/);
  });
});
