const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "1r4m#7uC4s",

    database: "employeeTracker_db"

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
        choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "View All Roles", "Exit the Program"]
    })
    .then(function(answer) {
        if (answer.whatToDo === "View All Employees") {
            viewAllEmployees();
        }
        else if (answer.whatToDo === "View All Employees By Department") {
            viewAllByDept();
        }
        else if (answer.whatToDo === "View All Employees By Manager") {
            viewAllByManager();
        }
        else if (answer.whatToDo === "Add Employee") {
            addEmployee();
        }
        else if (answer.whatToDo === "Remove Employee") {
            removeEmployee();
        }
        else if (answer.whatToDo === "Update Employee Role") {
            updateEmployeeRole();
        }
        else if (answer.whatToDo ===  "Update Employee Manager") {
            updateEmployeeManager();
        }
        else if (answer.whatToDo === "View All Roles") {
            viewAllRoles();
        }
        else {
            connection.end();
        }
    })
};

