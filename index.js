// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions');
const utils = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const prompt = inquirer.createPromptModule();

// TODO: Create a function to write README file
prompt(questions).then((answers) => {
    const readMe = utils.generateMarkdown(answers)
    console.log(answers);
    try {
        fs.writeFileSync('README.md', readMe);
    } catch (err) {
        console.log(err);
    }
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
