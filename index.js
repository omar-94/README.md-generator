const fs = require('fs');
const inquirer = require('inquirer');


// Function to generatet README.md file
const generateREADME = (answers) =>
`# ${answers.title}

## Description
    ${answers.description}

## Table of Contents
    -[Installation] (#installation)
    -[Usage] (#usage)
    -[Credits] (#credits)
    -[License] (#license)

## Installation
    ${answers.installation}

## Usage
    ${answers.usage}

    ![alt text](assets/images/${answers.imageFileName}

## Credits
    ${answers.collaborators}
    ${answers.thirdPartyAssets}
    ${answers.tutorials}        

## License    
    ${answers.license}
`

inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      }
    ])

    .then((answers) => {
      const readMeContent = generateREADME(answers);

      fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Succesfully created README.md file!')
        );
    });    