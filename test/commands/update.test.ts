import { runCommand } from "@oclif/test";
import { expect } from "chai";
import { sharedDbConnection } from "../../src/db/ConnectDatabase.js";

describe("update", () => {
  beforeEach(async () => {
    await sharedDbConnection.deleteFrom("todos").execute();
  });

  it("runs update cmd", async () => {
    const { stdout } = await runCommand("update");
    expect(stdout).to.contain("hello world");
  });

  it("runs update --name oclif", async () => {
    const { stdout } = await runCommand("update --name oclif");
    expect(stdout).to.contain("hello oclif");
  });
});
