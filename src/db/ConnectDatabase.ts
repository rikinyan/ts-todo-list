import { Kysely, SqliteDialect } from 'kysely'
import SQLite from 'better-sqlite3'
import { Database } from './DatabaseType.js'


export function connectDatabase() {
    const dialect = new SqliteDialect({
        database: new SQLite("../todo.db"),
    })

    const db = new Kysely<Database>({
        dialect,
    })

    return db
}