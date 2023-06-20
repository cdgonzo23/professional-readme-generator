// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [Description](#description)
  - [Installation Instructtions](#installation)
  - [Usage Information](#usage)
  - [Contribution Guidelines](#contributing)
  - [Test Instructions](#tests)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ### GitHub URL
  https://github.com/${data.gitHub}

  ### Email
  Please email me at ${data.email} if you have any further questions. Thank You!

  `;
}

module.exports = {generateMarkdown}
