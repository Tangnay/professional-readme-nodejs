const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "project_title",
    message: "What's your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What's your description?",
  },
  {
    type: "input",
    name: "installation_instructions",
    message: "What's your installation instructions?",
  },
  {
    type: "input",
    name: "usage_information",
    message: "What's your usage information?",
  },
  {
    type: "input",
    name: "contribution_guidelines",
    message: "What's your contribution guidelines?",
  },
  {
    type: "input",
    name: "test_instructions",
    message: "What's your test instructions?",
  },
  {
    type: "list",
    name: "license",
    message: "license?",
    choices: ["MIT", "mpl-2.0", "postgresql", "ncsa"],
  },
  {
    type: "input",
    name: "github_username",
    message: "github username?",
  },
  {
    type: "input",
    name: "email",
    message: "email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  const content = generateMarkdown(data);

  fs.writeFile("README.md", content, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(answers);
  });
}

// Function call to initialize app
init();
