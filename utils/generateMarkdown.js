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

  ${data.license}


  ## Contributing

  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
  
  ${data.contributing}


  ## Tests

  ${data.tests}


  ## Questions

  Email me at ${data.email} and find me on Github: [${data.username}](https://github.com/${data.username}/${data.repository}).
  `;
}

module.exports = generateMarkdown;
