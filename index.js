const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown")
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid entry is required.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "repository",
        message: "What is the name of your GitHub repository?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid entry is required.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid entry is required.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid entry is required.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process, if applicable."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "input",
        name: "credits",
        message: "List collaborators, third-party assets, or followed tutorials here."
    },
    {
        type: "input",
        name: "license",
        message: "Enter licensing information here."
    }]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("README.md has been generated.")
    });
}

async function init() {
    try {
        const data = await inquirer.prompt(questions);
        const markdownContent = generateMarkdown(data);
        await writeFileAsync("newREADME.md", markdownContent);
        } catch(err) {
            throw(err);
        }
    }

init();