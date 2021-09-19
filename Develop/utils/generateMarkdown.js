const fs = require('fs');
function generateMarkdown(data) {
  return `# ${data.title}


[![license](https://img.shields.io/badge/license-${data.licensing}-success)](https://shields.io)


## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#test)
- [Contact](#contact)

## Decription:
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License:
${data.licensing}

## Contributions
${data.contribution}

## Testing:
${data.testing}

## Contact:
 - GitHub: [${data.github}](https://github.com/${data.github}) 
 - Email: ${data.email}

`;
}

module.exports = generateMarkdown;


/*// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}*/