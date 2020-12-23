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

};

function addARole() {

};

function addEmployee() {

};

function viewAllByDepartment() {

};

function viewAllByRole() {

};

function viewAllEmployees() {

};

function updateEmployeeRole() {
    
};

