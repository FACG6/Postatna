BEGIN;

DROP TABLE IF EXISTS users, posts;

create TABLE users(
    id serial primary key,
    username varchar(30),
    email varchar(50),
    password varchar(50)
);

create TABLE posts(
    id serial primary key,
    title varchar(50),
    dess text,
    user_id INTEGER REFERENCES users(id)
);

insert into
    users (username, email, password)
values
    ('fatma', 'fatma@gmaul.coim', 'fhjhfgfy');
insert into
    posts (title, dess, user_id)
values
    ('djfhjfh', 'fatfjkbfma@gmaul.coim', 1);

 COMMIT;