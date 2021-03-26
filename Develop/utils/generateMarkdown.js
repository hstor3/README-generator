// function that returns a screenshot
function renderImg(screenshot) {
  if (screenshot) {
    return `![screenshot](./assets/codingimg.jpg)`
  } else {
    return ''
  }
}
// ${data.something}.join${data.something}

// function that generates markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

[Find me on GitHub!](https://github.com/${data.user})


![GitHub License](https://img.shields.io/badge/license-${data.badges}-blue?style=flat&logo=appveyor) 
## Languages 

> ${data.stack}

## Deployed Link

${data.deployed}

## Table of Contents

* [Badges](#badges)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributes](#contribute)
* [Deployed Link](#deployedlink)
* [Questions](#questions)
* [Additional Info](#additional)

## Description

${renderImg(data.screenshot)}

> ${data.description}

## Installation

> ${data.installation}

## Usage

## Contributes

> ${data.contribution}

## Additional Info

> ${data.add}

[Email me with questions!](${data.email})
`;
}

module.exports = generateMarkdown;