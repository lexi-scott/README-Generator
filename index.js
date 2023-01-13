const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path')

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Github Username:'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Project Name:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Licence type:',
        choices: ['MIT', 'Apache', 'GPL', 'ISC', 'None'] 
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'Command to install dependencies:',
        default: 'npm i'
    },
    {
        type: 'suggest',
        name: 'test',
        message: 'Command to run tests',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What should a user know about usage:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What does a user need to know about contributing to the repo:"
    },
];

// function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync((fileName), data)
}
// path.join(process.cwd(), goes before filename
// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
          writeToFile("README.md", generateMarkdown({ ...data }))
        })
        // Error -> something went wrong
        .catch(function (error) {
            console.log("An Error Occured");
            console.log(error);
            // throw new Error()
        });
}


// Function call to initialize app
init();