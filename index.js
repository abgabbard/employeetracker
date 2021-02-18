const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql");
const consoletable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employeeTracker_DB",
});

connection.connect(function (err) {
  if (err) throw err;
  initialize();
});

function viewDepartment() {
  const connector = connection.query(
    "SELECT * FROM department",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      initialize();
    }
  );
}

function viewEmployee() {
  const connector = connection.query(
    "SELECT * FROM employee",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      initialize();
    }
  );
}
function viewRole() {
  let connector = connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    initialize();
  });
}

function addDepartment() {
  inquirer
    .prompt({
      name: "newDepartmentName",
      type: "input",
      message: "What is the name of the new department?",
    })
    .then(function (answer) {
      var query = connection.query(
        "INSERT INTO department (deptname) VALUES (?)",
        answer.newDepartmentName,
        function (err, res) {
          if (err) throw err;

          viewDepartment();
        }
      );
    });
}

function initialize() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Department",
        "View Employee",
        "View Role",
        "Update Employee Role",
        "Exit",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "View Department":
          viewDepartment();
          break;

        case "View Employee":
          viewEmployee();
          break;

        case "View Role":
          viewRole();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "exit":
          connection.end();
          break;
      }
    });
}

// function initialize() {
//     inquirer
//       .prompt([
//         {
//           type: "checkbox",
//           name: "initialize",
//           message: "Please choose one of the actions below:",
//           choices: ["Add Department", "Add Role", "Add Employee", "View Department", "View Employee", "View Role", "Update Employee"],
//         },
//       ])
//       .then((data) => {
//         const typeChecker = data.initialize.toString();
//         if (typeChecker === "Add Department") {
//           addDepartment();
//         } else if (typeChecker === "Add Role") {
//           addRole();
//         } else if (typeChecker === "Add Employee") {
//           addEmployee();
//         } else if (typeChecker === "View Role") {
//           viewRole();
//         } else if (typeChecker === "View Department") {
//           viewDepartment();
//         } else if (typeChecker === "View Employee") {
//           viewEmployee();
//         } else if (typeChecker === "Update Employee") {
//           updateEmployee();
//         };
//       });
//   }

// function view() {
//   inquirer.prompt([
//           {
//             type: "input",
//             message: "What is the Manager's name?",
//             name: "name",
//           },
//         ])
//         .then((data) => {
//           const manager = new Manager(
//             data.name,
//             data.id,
//             data.email,
//             data.officeNumber
//           );
//           team.push(manager);
//           addNewMember();
//         });
//     }

//   function initialize() {
//     inquirer
//       .prompt([
//         {
//           type: "checkbox",
//           name: "initialize",
//           message: "Do you want to add view or update?",
//           choices: ["Add", "View", "Update"],
//         },
//       ])
//       .then((data) => {
//         const typeChecker = data.initialize.toString();
//         if (typeChecker === "Add") {
//           add();
//         } else if (typeChecker === "View") {
//           view();
//         } else if (typeChecker === "Update") {
//           update();
//         }
//       });
//   }

//   function initialize() {
//     inquirer
//       .prompt([
//         {
//           type: "checkbox",
//           name: "initialize",
//           message: "Do you want to add view or update?",
//           choices: ["Add", "View", "Update"],
//         },
//       ])
//       .then((data) => {
//         const typeChecker = data.initialize.toString();
//         if (typeChecker === "Add") {
//           add();
//         } else if (typeChecker === "View") {
//           view();
//         } else if (typeChecker === "Update") {
//           update();
//         }
//       });
//   }

//   function add() {
//     inquirer
//       .prompt([
//         {
//           name: "addNewMember",
//           type: "confirm",
//           message: "Do you want to add another team member?",
//         },
//       ])
//       .then((data) => {
//         if (data.addNewMember === true) {
//         //   newExecute();
//         } else {
//         //   renderHTML();
//         }
//       });
//   }

// //   function view() {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           message: "What is the Manager's name?",
//           name: "name",
//         },
//       ])
//       .then((data) => {
//         const manager = new Manager(
//           data.name,
//           data.id,
//           data.email,
//           data.officeNumber
//         );
//         team.push(manager);
//         addNewMember();
//       });
//   }

//   function update() {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           message: "What is the Engineer's name?",
//           name: "name",
//         },
//       ])
//       .then((data) => {
//         const engineer = new Engineer(
//           data.name,
//           data.id,
//           data.email,
//           data.GitHub
//         );
//         team.push(engineer);
//         addNewMember();
//       });
//   }

//   function renderHTML() {
//     fs.writeFileSync(outputPath, render(team), "utf-8");
//   }

// initialize();
