const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const util = require("util");
const path = require("path");

const connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "1r4m#7uC4s",

    database: "employeetracker"

});

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected as id " + connection.threadId + "\n");
    start();
})

function start() {
    
    inquirer.prompt({
        name: "whatToDo",
        type: "list",
        message: "What would you like to do?",
        choices: [
            
            "Add a Department", 
            "Add a Role", "Add an Employee",    
            "View All Employees By Department", 
            "View All Employees By Role", 
            "View All Employees", 
            "Update Employee Role", 
            "Exit the Program"

        ]
    })
    .then(function(answer) {
        if (answer.whatToDo === "Add a Department") {
            addADepartment();
        }
        else if (answer.whatToDo === "Add a Role") {
            addARole();
        }
        else if (answer.whatToDo === "Add an Employee") {
            addEmployee();
        }
        else if (answer.whatToDo === "View All Employees By Department") {
            viewAllByDepartment();
        }
        else if (answer.whatToDo === "View All Employees By Role") {
            viewAllByRole();
        }
        else if (answer.whatToDo === "View All Employees") {
            viewAllEmployees();
        }
        else if (answer.whatToDo === "Update Employee Role") {
            updateEmployeeRole();
        }
        else {
            connection.end();
        }
    })
};

function addADepartment() {
    inquirer.prompt([
        {
          name: "deptName",
          type: "input",
          message: "What is the name of the department you want to add to the directory?"
        }  
    ]).then(function(answer) {
        connection.query(
            "INSERT INTO department SET ?",
            {
                dept_name: answer.deptName
            },
            function(err) {
                if (err) throw err;
                console.log("The department has been added.");
                start();
            }
        );
    });

};

function addARole() {
    inquirer.prompt([
        {
          name: "addingRole",
          type: "input",
          message: "What employee role would you like to add to the database?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary?"
        }  
    ]).then(function(answer) {
        connection.query(
            "INSERT INTO role SET ? ?",
            {
                title: answer.addingRole,
                salary: answer.salary
            },
            function(err) {
                if (err) throw err;
                console.log("That role has been added to the database.");
                start();
            }
        );
    });

};

function addEmployee() {
    inquirer.prompt([
        {
          name: "firstName",
          type: "input",
          message: "What is your new employee's first name?"
        },
        {
          name: "lastName",
          type: "input",
          message: "What is their last name?"
        },
        {
          name: "employeeRole",
          type: "input",
          message: "What is their role within the company?"
        },
        {
          name: "employeeManager",
          type: "input",
          message: "Who is their manager?"
        }
    ]).then(function(answer) {
        connection.query(
            "INSERT INTO department SET ?",
            {
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: answer.employeeRole,
                manager_id: answer.employeeManager
            },
            function(err) {
                if (err) throw err;
                console.log("Your new employee has been added to the database!");
                start();
            }
        );
    });

};

function viewAllByDepartment() {

};

function viewAllByRole() {

};

function viewAllEmployees() {

};

function updateEmployeeRole() {
    
};

