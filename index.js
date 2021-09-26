// TODO: Include packages needed for this application
// inports code
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');





// TODO: Create an array of questions for user input
const promptQuestions =
    ([
    // github username
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username?',
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
        message: 'What is the title of your project',
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
        message: 'Provide a description of the project',
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
        message: 'Provide instruction on how to install your project.',
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
        message: 'How do you use this project?',
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
        message: 'How should people contribute to this project?',
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
        message: 'How do you test this project?',
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
        message: 'Choose a license for your project.',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'None'],
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
])


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptQuestions)
    .then(function (userInput) {
        console.log(userInput)
        writeFile("README.md", generateMarkdown(userInput));
    });
};



// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
        throw new Error (err);
        console.log("Success! Info transfered to README.");
    });
};


// Function call to initialize app
init();
