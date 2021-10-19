const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function initialize () {
    addEmployee();
}

function addEmployee() {
inquirer
.prompt([
    {
        type:"input",
        name:"name",
        message:"What is the employee's name?"
    },
    {
        type:"input",
        name:"id",
        message:"What is the employee's id number?"
    },
    {
        type:"input",
        name:"email",
        message:"What is the employee's email address?"
    },
    {
        type:"list",
        name:"role",
        message: "What is the employee's job title?",
        choices: ["Engineer", "Intern" ,"Manager"]
    }
])
    .then(function({name,id,email,role}) {
        let contactInfo = ""
        if(role === "Engineer") {
            contactInfo = "GitHub username"
        }
        else if (role == "Intern") {
            contactInfo = "school name"
        }
        else if (role == "Manager") {
            contactInfo == "office number"
        }
        inquirer.prompt([
        {
            message: `Enter employee ${contactInfo}`,
            name: "contactInfo"
        },
        {
            type:"list",
            name:"more_members",
            message: "Would you like to add any more employees to this list?",
            choices: ["Yes" ,"No"]
        }      
    ])
    // .then(function({contactInfo,more_members}){
    //     let newMember;
    //     if 
    // })
    })
}

initialize();