const inquirer = require("inquirer");
const fs = require("fs");
const pageTemplate = require("./src/page-template");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];
function addEmployee() {
    function managerQuestions () {
        inquirer
        .prompt([
            {
                type:"input",
                name:"name",
                message:"What is the team manager's name?"
            },
            {
                type:"input",
                name:"id",
                message:"What is the team manager's id number?"
            },
            {
                type:"input",
                name:"email",
                message:"What is the team manager's email address?"
            },
            {
                type:"input",
                name:"number",
                message:"What is the team manager's office number?"
            }
        ])

        .then(response => {
        team.push (new Manager(response.name,response.id,response.email,response.number))
        console.log(team);
        addRole();
        }) 
    }
    
        function addRole() {
            inquirer
            .prompt([
            {
            type:"list",
            name:"role",
            message: "What kind of team member would you like to add?",
            choices: ["Engineer", "Intern" ,"I don't want to add any more members"]
            }])

        .then(function(response) {
        let contactInfo = ""
        if(response.role === "Engineer") {
            engineerQuestions();
        }
        else if (response.role == "Intern") {
            internQuestions();
        }
        else {
            createHTML();
        }
        })
        }

    function engineerQuestions () {
        inquirer
        .prompt([
            {
                type:"input",
                name:"name",
                message:"What is the engineer's name?"
            },
            {
                type:"input",
                name:"id",
                message:"What is the engineer's id number?"
            },
            {
                type:"input",
                name:"email",
                message:"What is the engineer's email address?"
            },
            {
                type:"input",
                name:"username",
                message:"What is the engineer's github username?"
            }
        ])
        .then(response => {
        team.push (new Engineer(response.name,response.id,response.email,response.username))
        console.log(team);
        addRole();
        }) 
    }

    function internQuestions () {
        inquirer
        .prompt([
            {
                type:"input",
                name:"name",
                message:"What is the intern's name?"
            },
            {
                type:"input",
                name:"id",
                message:"What is the intern's id number?"
            },
            {
                type:"input",
                name:"email",
                message:"What is the intern's email address?"
            },
            {
                type:"input",
                name:"school",
                message:"What is the intern's school name?"
            }
        ])

        .then(response => {
        team.push (new Intern(response.name,response.id,response.email,response.school))
        console.log(team);
        addRole();
        }) 
        }
managerQuestions();


}
function createHTML() {
    const html = ''
fs.writeFile("team-profile.html",pageTemplate(team),(err) =>
err ? console.log(err) : console.log('Success!'))
}

addEmployee();

    