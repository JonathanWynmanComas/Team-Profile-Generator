const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require("./src/generateHTML");

const team = [];

function startApp() {
  addManager();
}

function addManager() {
  inquirer.prompt([
    { name: "name", message: "Manager name:" },
    { name: "id", message: "ID:" },
    { name: "email", message: "Email:" },
    { name: "officeNumber", message: "Office number:" }
  ])
  .then(data => {
    const manager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officeNumber
    );

    team.push(manager);
    menu();
  });
}

function menu() {
  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Add team member?",
      choices: ["Engineer", "Intern", "Finish"]
    }
  ])
  .then(answer => {
    if (answer.choice === "Engineer") addEngineer();
    else if (answer.choice === "Intern") addIntern();
    else buildTeam();
  });
}

function addEngineer() {
  inquirer.prompt([
    { name: "name", message: "Engineer name:" },
    { name: "id", message: "ID:" },
    { name: "email", message: "Email:" },
    { name: "github", message: "GitHub username:" }
  ])
  .then(data => {
    const engineer = new Engineer(
      data.name,
      data.id,
      data.email,
      data.github
    );

    team.push(engineer);
    menu();
  });
}

function addIntern() {
  inquirer.prompt([
    { name: "name", message: "Intern name:" },
    { name: "id", message: "ID:" },
    { name: "email", message: "Email:" },
    { name: "school", message: "School:" }
  ])
  .then(data => {
    const intern = new Intern(
      data.name,
      data.id,
      data.email,
      data.school
    );

    team.push(intern);
    menu();
  });
}

function buildTeam() {
  const html = generateHTML(team);

  fs.writeFileSync("./dist/index.html", html);
  console.log("Team page generated!");
}

startApp();