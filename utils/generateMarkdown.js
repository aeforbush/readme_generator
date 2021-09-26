const fs = require('fs');
function generateMarkdown(data) {
return `
![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.title})
  
# ${data.title}


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
* This application is covered under the ${data.licensing} license.

## Contributions
${data.contribution}

## Testing:
${data.testing}

## Contact:
* If you have any further questions please feel free to contact me at:
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