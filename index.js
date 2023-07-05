// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
// import * as fs from 'node:fs/promises';
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your email address",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the name of your project",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "How does a user acces your repository",
        name: "usage"
    },
    {
        type: "input",
        message: "Does the repository have any other contributors?",
        name: "contribution"
    },
    {
        type: "input",
        message: "Are there any tests to be run?",
        name: "tests"
    },
    {
        type: "list",
        message: "Select liscense for your project",
        name: "liscense",
        choices: [
            "MIT",
            "APACHE",
            "GPL",
            "BSD",
            "none"
        ]
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.log(err) : console.log(`${fileName}.md writtne successfully.`))
}

// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions).then(answers => { 
        writeToFile("README.md", generateMarkdown(answers))
   
    })
};

// Function call to initialize app
init();
