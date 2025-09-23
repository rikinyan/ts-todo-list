import { Kysely, WhereNode } from "kysely";
import Todo from "../domain/Todo.js";
import TodoList from "../domain/TodoList.js";
import TodoStore from "./../domain/TodoStore.js"
import { Database } from "./DatabaseType.js";
import { connectDatabase } from "./ConnectDatabase.js";

export default class TodoDatabase implements TodoStore {
    db: Kysely<Database>

    constructor(dbPath: string) {
        this.db = connectDatabase(dbPath)
    }

    async create(description: string): Promise<void> {
        const result = await this.db
        .insertInto("todos")
        .values({
            description: description,
            is_end: 0,
        })
        .executeTakeFirst()
    }
    async selectList(): Promise<TodoList> {
        const result = await this.db
        .selectFrom("todos")
        .selectAll()
        .execute()
        
        return new TodoList(
            result.map((entity) => {
                return new Todo(
                    entity.id.toString(),
                    entity.description.toString(),
                    entity.is_end === 1,
                    entity.created_at
                )
            })
        )
    }
    async selectTodo(id: string): Promise<Todo | null> {
        const result = await this.db
        .selectFrom("todos")
        .selectAll()
        .where("id", "=", +id)
        .execute()

        if(result.length != 1) { return null }

        let entity = result[0]

        return new Todo(
            entity.id.toString(),
            entity.description.toString(),
            entity.is_end === 1,
            entity.created_at
        )
    }
    async update(id: string, description: string, isEnd: boolean): Promise<void>{
        await this.db.updateTable("todos")
        .set({
            description: description,
            is_end: isEnd ? 1 : 0
        })
        .where("id", "=", +id)
        .execute()
    }
    async delete(id: string): Promise<void>{
        await this.db.deleteFrom("todos")
        .where("id", "=", +id)
        .execute()
    }
}