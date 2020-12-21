DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;

CREATE TABLE department (
    id(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT(10) NOT NULL AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL,
    department_id INT(30),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT(10) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT (10),
    manager_id INT (10),
    PRIMARY KEY (id)
);

INSERT INTO department(name) VALUES ();

INSERT INTO role(title, salary, department_id) VALUES ();

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ();