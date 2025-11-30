create table if not exists todos (
    id integer primary key autoincrement,
    description string not null,
    is_end integer default 0,
    created_at text not null default (datetime()),
    updated_at text not null default (datetime())
);
