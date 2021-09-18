// TODO: Include packages needed for this application
// inports code
const inquirer = require('inquirer');
const fs = require('fs');





// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt
    ([
    // github username
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }else{
                console.log('You need to enter your GitHub Username.');
                return false;
            }
        }
    },
    // title = project name
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }else{
                console.log('You need to enter a Project Title.');
                return false;
            }
        }
    },
    // description of project
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }else{
                console.log('Please provide a project description.');
                return false;
            }
        }
    },
    // installation of project
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instruction on how to install your project. (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            }else{
                console.log('Please provide instruction on how to install your project.');
                return false;
            }
        }
    },
    // usage information
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }else{
                console.log('Please provide information on how to use this project.');
                return false;
            }
        }
    },
    // contribution guidelines
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            }else{
                console.log('Please provide information on how to contribute to this project.');
                return false;
            }
        }
    },
    // test instructions
    {
        type: 'input',
        name: 'test',
        message: 'How do you test this project? (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            }else{
                console.log('Please provide information on how you test this project.');
                return false;
            }
        }
    },
    // license options
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project. (Required)',
        choices: ['MIT', 'Mozilla-Public', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            }else{
                console.log('Please pick a license option for this project.');
                return false;
            }
        }
    },
    // email address
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email',
    }
]);
};

promptQuestions();
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
