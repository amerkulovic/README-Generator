const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
    type: "list",
    message: "What is the license you used?",
    choices: ["Apache2.0", "Boost", "BSD"],
    name: "license",
  },
  {
    type: "input",
    message: "What are the contributions you would like to add to this project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What testing have you done?",
    name: "test",
  },
  {
    type: "input",
    message: "Please enter your github account name.",
    name: "github",
  },
  {
    type: "input",
    message: "Please enter your email address.",
    name: "email",
  },
];

function writeToFile(fileName, data) {
  const licenseData = generateMarkdown(data);
  const template = `# ${data.title}
  ${licenseData}
## Description
  ${data.description}
## Table of Contents
<a href="#installation">Installation</a>\n
<a href="#usage">Usage</a>\n
<a href="#license">License</a>\n
<a href="#contribution">Contribution</a>\n
<a href="#test">Test</a>\n
<a href="#question">Questions</a>\n

## <div id="installation">Installation</div>
  ${data.installation}
## <div id="usage">Usage</div>
  ${data.usage}
## <div id="license">License</div>
 This application is covered under ${licenseData}
## <div id="contribution">Contribution</div>
  ${data.contribution}
## <div id="test">Test</div>
  ${data.test}
## <div id="question">Question</div>
If you wish to contact me, feel free to find me here:\n
  Email: ${data.email}\n
  GitHub Account: <a href="https://github.com/${data.github}">${data.github}</a>`;

  return fs.writeFileSync(fileName, template);
}

function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("README.md", response);
  });
}

init();
