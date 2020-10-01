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
        message: "What does the user need to konw about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to konw about contributing to the repo?",
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
    })

fs.writeFile('generateMarkdown', generatedFile, function (err) {
    if (err) throw err;
    console.log("Success!");
});