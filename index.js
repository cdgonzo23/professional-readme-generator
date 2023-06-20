const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions');
const utils = require('./utils/generateMarkdown');

const prompt = inquirer.createPromptModule();

prompt(questions).then((answers) => {
    const readMe = utils.generateMarkdown(answers)
    console.log(answers);
    try {
        fs.writeFileSync('sampleREADME.md', readMe);
    } catch (err) {
        console.log(err);
    }
})