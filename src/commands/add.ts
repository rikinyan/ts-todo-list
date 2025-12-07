import { Args, Command } from "@oclif/core";
import TodoDatabase from "../db/TodoDatabase.js";
import TodoStoreOperation from "../domain/TodoStoreOperation.js";

export default class Add extends Command {
  static override args = {
    description: Args.string({ description: "todo description" }),
  };
  static override description = "describe the command here";
  static override examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const { args } = await this.parse(Add);

    const { description } = args;
    if (description === undefined) {
      this.log("write todo's description.");
      return;
    }

    try {
      const todoStoreOperation = new TodoStoreOperation(new TodoDatabase());
      todoStoreOperation.createTodo(description);
      this.log(`created TODO "${description}"`);
    } catch {
      this.log("error!");
    }
  }
}
