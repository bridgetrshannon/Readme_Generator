// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#install)
  * [Usage] (#usage)
  * [Credits] (#credits)
  * [License] (#license)
`;
}

module.exports = generateMarkdown;
