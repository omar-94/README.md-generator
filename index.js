const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


// Function to generate README.md file
const generateREADME = (answers) =>
`# ${answers.title}

## Description
${answers.description}

## Table of Contents
-[Installation](#installation)
-[Usage and Test Instructions](#instructions)
-[Credits](#credits)
-[License](#license)
	
## Installation
${answers.installation}

## Usage and Test Instructions
${answers.usage}

![Screenshot](./assets/images/${answers.imageFileName})

## Credits
Collaborators:
${answers.collaborators}

## License:
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
			message: 'What are the steps required to install your project? Provide a description of how to get the development enviroment running. \n'
		},
		{
			type: 'input',
			name: 'usage',
			message: 'Provide instructions on how to use your application. \n'
		},
		{
			type: 'input',
			name: 'imageFileName',
			message: 'Screenshots are always a great way to show your application. Include the file name and extension of your screenshot located in your assets/images folder. (Example: image.jpg) \n'
		},
		{
			type: 'input',
			name: 'collaborators',
			message: 'List your collaborators, if any, with links to their GitHub. \n'
		},
		{
			type: 'list',
			name: 'license',
			message: 'Choose a license you would like to add for your application.',
			choices: ['MIT License', 'GPL License', 'Apache License']
		}
	]);
}

// function renderLicenseBadge(answers) {
// 	let licenseType = answers.license
// 	let licenseBadge = ''

// 	if(licenseType === 'MIT License') {
// 		licenseBadge = `![License: MIT](https://img.shields.io/badge/license-MIT-blue)` 
// 	} else if (licenseType === 'GPL License') {
// 		licenseBadge = `![License: GPL](https://img.shields.io/badge/license-GPL-blue)` 
// 	} else if (licenseType === 'Apache License') {
// 		licenseBadge = `![License: GPL](https://img.shields.io/badge/license-Apache-blue)` 
// 	}
// 	return licenseBadge;
// }

// // renderLicenseBadge();

const init = () => {
	promptUser()
		.then((answers) => writeFileAsync('README.md', generateREADME(answers)))
		.then(() => console.log('Succesfully created README.md file!'))
		.catch((err) => console.log(err));
};

init();