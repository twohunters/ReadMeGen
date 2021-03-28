function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}


  ## Table of Contents

  - [Title](#title)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  
  ${data.installation}


  ## Usage

  ${data.usage}


  ## Credits

  ${data.credits}


  ## License

  (https://img.shields.io/badge/license-${data.license}-brightgreen)

  This project is covered under the ${data.license} license.


  ## Contributing

  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
  
  ${data.contributing}


  ## Tests

  ${data.tests}


  ## Questions

  Feel free to email me at ${data.email} with any questions, and find me on Github: [${data.username}](https://github.com/${data.username}/${data.repository}).
  `;
}

module.exports = generateMarkdown;
