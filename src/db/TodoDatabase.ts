import { Kysely } from "kysely";
import Todo from "../domain/Todo.js";
import TodoList from "../domain/TodoList.js";
import TodoStore from "./../domain/TodoStore.js"
import { Database } from "./DatabaseType.js";
import { connectDatabase } from "./ConnectDatabase.js";

export default class TodoDatabase implements TodoStore {
    db: Kysely<Database>

    constructor() {
        this.db = connectDatabase()
    }

    async create(description: string): Promise<void> {
        console.log("save description", description)

        const result = await this.db
        .insertInto("todos")
        .values({
            description: description,
            is_end: 0,
        })
        .executeTakeFirst()
    }
    selectList(): TodoList {
        console.log("return TodoList")
        return new TodoList([ new Todo("1", "aa", true, new Date()) ])
    }
    selectTodo(id: string): Todo | null {
        console.log("return Todo")
        return new Todo(id, "aa", true, new Date()) 
    }
    update(id: string, description: string, isEnd: boolean): void {
        console.log("update Todo")
    }
    delete(id: string): void {
        console.log("remove Todo")
    }
}