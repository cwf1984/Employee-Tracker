DROP DATABASE IF EXISTS employeetracker;

CREATE DATABASE employeetracker;

USE employeetracker;

CREATE TABLE department (
    id(10) NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT(10) NOT NULL AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL (10, 2),
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

INSERT INTO department(name) VALUES ("Sales");
INSERT INTO department(name) VALUES ("Engineering");
INSERT INTO department(name) VALUES ("Finance");
INSERT INTO department(name) VALUES ("Advertising");
INSERT INTO department(name) VALUES ("Human Resources");

INSERT INTO role(title, salary, department_id) VALUES ("Sales Lead", 100000, 1);
INSERT INTO role(title, salary, department_id) VALUES ("Salesperson", 80000, 1);
INSERT INTO role(title, salary, department_id) VALUES ("Lead Engineer", 120000, 2);
INSERT INTO role(title, salary, department_id) VALUES ("Software Engineer", 90000, 2);
INSERT INTO role(title, salary, department_id) VALUES ("Accountant", 75000, 3);
INSERT INTO role(title, salary, department_id) VALUES ("Head Designer", 120000, 4);
INSERT INTO role(title, salary, department_id) VALUES ("Web Designer", 60000, 4);
INSERT INTO role(title, salary, department_id) VALUES ("Recruiter", 70000, 5);
INSERT INTO role(title, salary, department_id) VALUES ("HR Specialist", 55000, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Richard", "Yates", 1, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("John", "Cheever", 2, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Margaret", "Atwood", 3, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Haruki", "Murakami", 2, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("John", "Irving", 2, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Charles", "Bukowski", 7, 7);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Stephen", "King", 6, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Toni", "Morrison", 8, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Harper", "Lee", 9, 8);