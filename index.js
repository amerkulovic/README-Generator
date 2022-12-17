// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What was the installation process of your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage of your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What is the license you used?",
    name: "license",
  },
  {
    type: "input",
    message: "What are the contribtions you would like to add to this project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What testing have you done?",
    name: "test",
  },
  {
    type: "input",
    message: "If you have any questions please feel free to ask?",
    name: "questions",
  },
];

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const exportData = generateMarkdown(data);
  const template = `${exportData}
## Description
  ${data.description}
## Table of Contents
## Installation
  ${data.installation}
## Usage
  ${data.usage}
## License
 ${data.license}
## Contributions
  ${data.contribution}
## Tests
  ${data.test}
## Questions
  ${data.questions}`;

  return fs.writeFileSync(fileName, template);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
