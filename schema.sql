DROP DATABASE IF EXISTS employeeTracker_DB;

CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL, 
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  deptname VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

--            Employee Table Data             -- 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andrew", "Gabbard", 01, 520);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Brown", 02, 520);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bill", "Baggins", 03, 520);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Josh", "A", 04, 520);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Becca", "C", 05, 520);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brando", "N", 06, 520);



--            Executive Department
INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 100000, 55);
INSERT INTO role (title, salary, department_id)
VALUES ("CFO", 90000, 55);

--            Senior Management
INSERT INTO role (title, salary, department_id)
VALUES ("VICE MANAGER", 80000, 50);
INSERT INTO role (title, salary, department_id)
VALUES ("REGIONAL MANAGER", 75000, 50);

--            Engineering Department
INSERT INTO role (title, salary, department_id)
VALUES ("ENGINEERING LEAD", 120000, 45);
INSERT INTO role (title, salary, department_id)
VALUES ("ENGINEER", 82000, 45);


INSERT INTO department (deptname)
VALUES ("Executive Officers");
INSERT INTO department (deptname)
VALUES ("Senior Management");
INSERT INTO department (deptname)
VALUES ("Engineering");



