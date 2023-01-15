//function that retursn a license badge
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-red.svg)`;
  }
  return '';
}

//function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'None') {
    return (
      '* [License](#license)'
    );
  }
  return '';
 }

// function that returns the license section of README
function renderLicenseSection(license) { 
  if (license !== 'None') {
    return (
      `## License
      This project is licensed under the ${license} license.`
    );
  }
  return '';
}

//sfunction to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [License] ${renderLicenseLink(data.license)}
  * [Usage](#usage)
  * [Constributing](#constributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  To install dependencies run the command:
   ${data.dependencies}

   ## Usage

   ${data.usage}
   

   ## License

   ${renderLicenseSection(data.license)}

   ## How to Contribute

   ${data.contribution} at my email: ${data.email} or on GitHub: ${data.github}

   ## Tests

   To run tests, use ${data.test}`
}

module.exports = generateMarkdown;
