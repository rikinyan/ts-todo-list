import { Kysely, SqliteDialect } from "kysely";
import SQLite from "better-sqlite3";
import { Database } from "./DatabaseType.js";
import { readFileSync } from "fs";

const dbPath = process.env.TODO_DATABASE || ":memory:";

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
    console.log("init todo table");
    const createTableSql = readFileSync("./TodoTable.sql", "utf8");
    sqlite.exec(createTableSql);
  }

  const dialect = new SqliteDialect({
    database: sqlite,
  });

  const db = new Kysely<Database>({
    dialect,
  });

  return db;
}

export const sharedDbConnection = dbConnection();
