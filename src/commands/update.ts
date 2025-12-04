import { Args, Command, Flags } from "@oclif/core";
import TodoStoreOperation from "../domain/TodoStoreOperation.js";
import TodoDatabase from "../db/TodoDatabase.js";

export default class Update extends Command {
  static override args = {
    id: Args.string({ description: "todo's id" }),
  };
  static override description = "describe the command here";
  static override examples = ["<%= config.bin %> <%= command.id %>"];
  static override flags = {
    description: Flags.string({ char: "d", description: "todo's description" }),
    isEnd: Flags.boolean({
      char: "e",
      description: "whether this todo has end",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Update);

    const todoId = args.id;
    if (todoId === undefined) {
      this.log("add todo's id");
      return;
    }

    const todoStoreOperation = new TodoStoreOperation(new TodoDatabase());

    const todo = await todoStoreOperation.selectTodo(todoId);
    if (todo === null) {
      this.log(`id-${todoId} todo doesn't exist.`);
      return;
    }

    let newDescription = flags.description;
    if (newDescription === undefined) {
      newDescription = todo.description;
    }

    let newIsEnd = flags.isEnd;
    if (newIsEnd === undefined) {
      newIsEnd = todo.isEnd;
    }

    await todoStoreOperation.update(todoId, newDescription, newIsEnd);

    this.log(`id${todoId} todo success updates.`);
  }
}
