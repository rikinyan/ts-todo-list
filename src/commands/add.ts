import {Args, Command, Flags} from '@oclif/core'
import TodoDatabase from '../db/TodoDatabase.js'
import TodoStoreOperation from '../domain/TodoStoreOperation.js'

export default class Add extends Command {
  static override args = {
    description: Args.string({description: "todo description"}) 
  }
  static override description = 'describe the command here'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    const {args} = await this.parse(Add)

    const description = args.description
    if (description === undefined) {
      this.log("write todo's description.")
      return
    }

    const todoStoreOperation = new TodoStoreOperation(new TodoDatabase(".todos.db"))
    todoStoreOperation.createTodo(description)
  }
}
