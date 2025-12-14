import { Kysely, SqliteDialect } from "kysely";
import SQLite from "better-sqlite3";
import { Database } from "./DatabaseType.js";

//const dbPath = process.env.TODO_DATABASE ||`${process.env.HOME}/.ts-todo-list/todo.db`
const dbPath = ":memory:"//process.env.TODO_DATABASE ||`${process.env.HOME}/.ts-todo-list/todo.db`

const createTodoTableSql = `
create table if not exists todos (
    id integer primary key autoincrement,
    description string not null,
    is_end integer default 0,
    created_at text not null default (datetime()),
    updated_at text not null default (datetime())
);

`

function dbConnection() {
  const sqlite = new SQLite(dbPath);
  const tableNames = sqlite
    .prepare("SELECT name FROM sqlite_schema WHERE type='table'")
    .all() as { name: string }[];

  if (
    !tableNames.find((table) => {
      return table.name === "todos";
    })
  ) {
    sqlite.exec(createTodoTableSql);
    console.log("init todo table");
  }

  const dialect = new SqliteDialect({
    database: sqlite
  });

  const db = new Kysely<Database>({
    dialect,
  });

  return db;
}

const sharedDbConnection = dbConnection();

export default sharedDbConnection
