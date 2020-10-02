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
        type: "list",
        choices: ["MIT", "GPL", "Apache 3.0", "Apache 2.0", "BSD"],
        name: "license",
        default: "MIT"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Please list any contributors to the project",
        name: "credits"
    }
])

    .then(function (data) {
        console.log(data);

        const generatedFile = generateMarkdown(data)
        console.log(generatedFile);
        // take in argument of generatedFile
        createFile(generatedFile);
    })

function createFile(file) {
    // passed in file as second argument for fs.writeFile
    fs.writeFile('generateMarkdown.md', file, function (err) {
        if (err) throw err;
        // passed in generateMarkdown
        console.log(generateMarkdown);
    });
}


