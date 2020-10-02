// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  ${data.installation}

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


