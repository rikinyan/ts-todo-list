import {
    ColumnType,
    Generated,
    Insertable,
    Selectable,
    Updateable,
} from 'kysely'


export interface Database {
    todos: TodosTable
}

export interface TodosTable {
    id: Generated<number>,
    description: String,
    is_end: 0 | 1,
    created_at: ColumnType<Date, undefined, never>,
    updated_at: ColumnType<Date, undefined, Date>,
}

export type TodoEntity = Selectable<TodosTable>
export type NewTodoEntity = Insertable<TodosTable>
export type TodoUpdate = Updateable<TodosTable>