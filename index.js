const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


// Function to generate README.md file
const generateREADME = (answers) =>
`# ${answers.title}

## Description
  	${answers.description}

## Table of Contents
    -[Installation](#installation)
    -[Usage](#usage)
    -[Credits](#credits)
    -[License](#license)

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

const promptUser = () => {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'title',
			message: 'What is the title of your project? \n',
		},
		{
			type: 'input',
			name: 'description',
			message: 'Please provide a description of your project. Things to consider: \n 1. What was your motivation? \n 2. Why did you build this project? \n 3. What problem does it solve? \n 4. What did you learn? \n'
		},
		{
			type: 'input',
			name: 'installation',
			message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development enviroment running. \n'
		},
		{
			type: 'input',
			name: 'usage',
			message: 'Provide instructions and examples for use. '
		}
	]);
}

const init = () => {
	promptUser()
		.then((answers) => writeFileAsync('README.md', generateREADME(answers)))
		.then(() => console.log('Succesfully created README.md file!'))
		.catch((err) => console.log(err));
};

init();