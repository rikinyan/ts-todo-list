import { Command } from "@oclif/core";
import TodoDatabase from "../db/TodoDatabase.js";
import TodoStoreOperation from "../domain/TodoStoreOperation.js";

export default class List extends Command {
  static override description = "describe the command here";
  static override examples = ["<%= config.bin %> <%= command.id %>"];
  public async run(): Promise<void> {
    const todoOperation = new TodoStoreOperation(new TodoDatabase());
    const list = await todoOperation.selectList();
    this.log(list.displaystring());
  }
}
