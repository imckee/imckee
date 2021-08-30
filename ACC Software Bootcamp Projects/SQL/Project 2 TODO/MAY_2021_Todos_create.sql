-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2021-05-16 20:48:03.316

-- tables
-- Table: TODOS
CREATE TABLE TODOS (
    TODO_ID integer  NOT NULL,
    description varchar(100)  NOT NULL,
    is_complete boolean  NOT NULL DEFAULT false,
    creation_timestamp timestamp  NOT NULL DEFAULT now(),
    modified_timestamp timestamp  NOT NULL DEFAULT now(),
    USER_ID integer  NOT NULL,
    CONSTRAINT TODOS_pk PRIMARY KEY (TODO_ID)
);

-- Table: USERS
CREATE TABLE USERS (
    USER_ID serial  NOT NULL,
    first_name varchar(50)  NULL,
    last_name varchar(50)  NOT NULL,
    CONSTRAINT USERS_pk PRIMARY KEY (USER_ID)
);

-- foreign keys
-- Reference: TODOS_USERS (table: TODOS)
ALTER TABLE TODOS ADD CONSTRAINT TODOS_USERS
    FOREIGN KEY (USER_ID)
    REFERENCES USERS (USER_ID)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.

insert into hr.users(first_name, last_name)
values ('Ian', "McKee");