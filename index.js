// TODO: Include packages needed for this application
const inquirer = require('inquirer');
var fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title?',
        name: 'title'
    },
  
    {
        type: 'input',
        message: 'description?',
        name: 'description'
    },
  
    {
        type: 'input',
        message: 'Installation?',
        name: 'installation'
    },
  
    {
        type: 'input',
        message: 'Usage?',
        name: 'usage'
    },
  
    {
      type: 'input',
      message: 'Contributors?',
      name: 'contributing'
    },

    {
        type: 'input',
        message: 'Tests?',
        name: 'tests',
    },
  
    {
        type: 'list',
        message: 'Select a license?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPLv2', 'The UnLicense']
    },

    {
        type: 'input',
        message: 'Email address?',
        name: 'email',
    },

    {
        type: 'input',
        message: 'Github username?',
        name: 'githubUsername',
    },

    {
        type: 'input',
        message: 'Github link?',
        name: 'githubLink',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data)
{
    fileName = "./utils/" + fileName; //adds the file name to the path
    return fs.writeFileSync(fileName, data); //writes the file; pretty simple
}

// TODO: Create a function to initialize app
function init()
{ 
    inquirer.prompt(questions).then((answers) => //uses promise with sum of answers "..." to collect the answers
    {
      console.log('README.MD Generated');
      writeToFile('README.md', generateMarkdown({...answers}));
    });
}

// Function call to initialize app
init();