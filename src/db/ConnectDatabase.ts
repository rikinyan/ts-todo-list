import { Kysely, SqliteDialect } from 'kysely'
import SQLite from 'better-sqlite3'
import { Database } from './DatabaseType.js'
import { readFileSync } from 'fs'


export function connectDatabase(dbPath: string) {
    const sqlite = new SQLite(dbPath) 
    const tableNames = sqlite.prepare("SELECT name FROM sqlite_schema WHERE type='table'").all() as {name: string}[]

    if (!tableNames.find(table => {
        return table.name === "todos"
    })) {
        console.log("create todo database.")

        const createTableSql = readFileSync("./TodoTable.sql", "utf8");
        sqlite.exec(createTableSql)
    } else {
        console.log("aa")
    }

    const dialect = new SqliteDialect({
        database: sqlite
    })

    const db = new Kysely<Database>({
        dialect,
    })

    return db
}