const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the tile of your project?",
      name: "project name",
    },
    {
      type: "input",
      message: "Description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Installation of your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage of your project?",
      name: "usage",
    },
    {
      type: "input",
      message: "Any contributing updates to your project?",
      name: "contributes",
    },
    {
      type: "input",
      message: "What tests have you done or plan to do for your project?",
      name: "tests",
    },
  ])
  .then((response) => fs.writeFile("README.md", JSON.stringify(response), (err) => (err ? console.error(err) : console.log("Success!"))));
