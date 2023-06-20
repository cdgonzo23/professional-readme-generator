const licenseList = {
  Apache: ['https://www.apache.org/licenses/LICENSE-2.0.txt', 'Apache_2.0-blue.svg'],
  MIT:['https://opensource.org/licenses/MIT', 'MIT-yellow.svg'],
  ISC:['https://opensource.org/license/isc-license-txt/', 'ISC-blue.svg'],
  GNU: ['https://www.gnu.org/licenses/gpl-3.0', 'GPLv3-blue.svg'],
  Mozilla: ['https://opensource.org/licenses/MPL-2.0', 'MPL_2.0-brightgreen.svg'],
  Boost: ['https://www.boost.org/LICENSE_1_0.txt', 'Boost_1.0-lightblue.svg']
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'N/A') {
    return '';
  } else {
    return `![License](https://img.shields.io/badge/License-${licenseList[license][1]})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'N/A') {
    return '';
  } else {
    return `[${license}](${licenseList[license][0]}) License.`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'N/A') {
    return '';
  } else {
    return 'This application is covered under the ';
  }
};


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation Instructtions](#installation)
  - [Usage Information](#usage)
  - [Contribution Guidelines](#contributing)
  - [Test Instructions](#tests)
  - [License](#license)
  - [GitHub Account](#gitHub)
  - [Contact Information](#email)

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

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ### GitHub
  https://github.com/${data.gitHub}

  ### Email
  Please email me at ${data.email} if you have any further questions. Thank You!

  `;
}

module.exports = {generateMarkdown}
