const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// follow this same pattern to write more questions
inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "githubusername"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What kind of license should your project have?",
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "Enter Usage",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter Contributing",
        name: "contributing"
    },
    {
        type: "input",
        message: "Enter Questions",
        name: "questions"
    },
])

    .then(function (answers) {
        // console.log(answers);

        const generatedFile = generateMarkdown(answers)
    })