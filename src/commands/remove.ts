import {Args, Command, Flags} from '@oclif/core'
import TodoStoreOperation from '../domain/TodoStoreOperation.js'
import TodoDatabase from '../db/TodoDatabase.js'

export default class Remove extends Command {
  static override args = {
    id: Args.string({id: "removed todo's id"}),
  }
  static override description = 'describe the command here'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
  }

  public async run(): Promise<void> {
    const {args} = await this.parse(Remove)

    const id = args.id
    if (id === undefined) {
      this.log("write todo's description.")
      return
    }

    const todoStoreOperation = new TodoStoreOperation(new TodoDatabase())
    todoStoreOperation.deleteTodo(id)
    this.log(`success remove id${id}`)
  }
}
