// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
// const { Certificate } = require('crypto');
const render = require('./utils/generateMarkdown')

// array of questions 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description about your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.',
    },
    {
        type: 'list',
        name: 'badges',
        message: 'Select a badge for your license.',
        choices: [{name: 'MIT', value: 'MIT'}, {name: 'APACHE 2.0', value: 'APACHE%202.0'}, {name: 'GPL', value: 'GPL'}]
    },
    {
        type: 'input',
        name: 'user',
        message: 'Please enter your GitHub user name.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address here.',
    },
    {
        type: 'checkbox',
        message: 'What languages are included in this project?',
        name: 'stack',
        choices: ['HTML', ' CSS', ' JavaScript', ' Jquery', ' Node', ' Express', ' React', ' Vue', ' BootStrap']
    },
    {
        type: 'confirm',
        name: 'screenshot',
        message: 'Would you like to add a screenshot?',
    },
    {
        type: 'input',
        name: 'deployed',
        message: 'Please enter the link to your deployed website.'
    },
    {
        type: 'input',
        name: 'add',
        message: 'Do you have additional links/information you would like to add?'
    },
];

function promptUser() {
    return inquirer
        .prompt(questions);
}

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data)

}

// function to initialize app
function init() {
    promptUser()
        .then((data) => writeToFile('README.md', render(data)))
        .then(() => console.log('You successfully wrote a README file.'))
        .catch((err) => console.error(err))
}


// call to initialize app
init();