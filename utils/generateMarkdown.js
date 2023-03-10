
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
    if (license === 'MIT') {
        return `![githublicense](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license === 'Apache 2.0') {
        return `![githublicense](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    } else if (license === 'GPLv2') {
        return `![githublicense](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
    } else if (license === 'The UnLicense') {
        return `![githublicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
    } else {
        return ``
    }
}

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
## About:
${data.About}
## Description:
${data.description}
## Table of Contents
- [About](#About)
- [desription](#description)
- [Installation](#installation)
- [Usage](#usage)
- [contributing](#contributing)
- [Tests](#tests)
## Installation:
${data.installation}
## Usage:
${data.usage}
## Contributing:
${data.contributing}
## Tests:
${data.tests}
## License:
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}
### Questions:
If you have any questions, please contact me at ${data.email} 
or visit my GitHub page at ${data.githubUsername}, ${data.githubLink}
`};

module.exports = generateMarkdown;