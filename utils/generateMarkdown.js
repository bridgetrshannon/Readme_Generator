// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![javascript badge](https://img.shields.io/badge/javascript-100%25-blue)
  ![MIT](https://img.shields.io/npm/l/inquirer) 

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Contributions
  ${data.contributing}
`;
}

module.exports = generateMarkdown;


