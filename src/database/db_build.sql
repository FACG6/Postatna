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
    description text,
    user_id INTEGER REFERENCES users(id)
);

insert into
    users (username, email, password)
values
    ('fatma', 'fatma.o.siam@gmail.com', '12312312'),
    ('angham','angham@gmail.com','121212'),
    ('dena','dena@gmail.com','111');
insert into
    posts ( description, user_id)
values
    ( 'How Can I begin in js ', 1),
    ( 'How Can I begin in asp ', 1),
    ( 'How Can I begin in php ', 2);

 COMMIT;
_
