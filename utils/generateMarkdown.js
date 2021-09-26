// const fs = require('fs');
function generateMarkdown(data) {
    return `

  
# ${data.title}


[![license](https://img.shields.io/badge/license-${data.licensing}-success)](https://shields.io)

## Decription:
${data.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#test)
- [Contact](#contact)


## Installation
${data.installation}

## Usage
${data.usage}

## License:
* This application is covered under the ${data.licensing} license.

## Contributions
${data.contribution}

## Testing:
${data.test}

## Questions:
* If you have any further questions please feel free to contact me at:
 - GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername}) 
 - Email: ${data.email}

`;
}

module.exports = generateMarkdown;


// [![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.title})]