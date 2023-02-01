
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
    if (license === 'MIT') {
        return '(https://img.shields.io/badge/License-MIT-yellow.svg)'
    } else if (license === 'Apache 2.0') {
        return '(https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    } else if (license === 'GPLv2') {
        return '(https://img.shields.io/badge/License-GPL%20v2-blue.svg)'
    } else if (license === 'The UnLicense') {
        return '(https://img.shields.io/badge/license-Unlicense-blue.svg)'
    } else {
        return ''
    }
}   //maybe a switch statement would be better here

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return '[MIT](https://choosealicense.com/licenses/mit/)'
    } else if (license === 'Apache 2.0') {
        return '[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)'
    } else if (license === 'GPLv2') {
        return '[GPLv2](https://choosealicense.com/licenses/gpl-2.0/)'
    } else if (license === 'The UnLicense') {
        return '[The UnLicense](https://choosealicense.com/licenses/unlicense/)'
    } else {
        return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return 'This project is licensed under the MIT license.'
    } else if (license === 'Apache 2.0') {
        return 'This project is licensed under the Apache 2.0 license.'
    } else if (license === 'GPLv2') {
        return 'This project is licensed under the GPLv2 license.'
    } else if (license === 'The UnLicense') {
        return 'This project is licensed under the The UnLicense license.'
    } else {
        return ''
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    //string literal to of markdown to be filled out and returned
  return `# ${data.title}
## Table of Contents
- [About](#About)
- [Installation](#installation)
- [Usage](#usage)
- [Future](#future)

## About:
${data.About}
## Installation:
${data.installation}
## Usage:
${data.usage}
## Future:
${data.future}
## License:
${renderLicenseSection(data.license)}`
};

module.exports = generateMarkdown;