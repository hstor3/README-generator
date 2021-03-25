// function that returns a screenshot
function renderImg(screenshot) {
  if (screenshot) {
    return `![screenshot](./assets/codingimg.jpg)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function that generates markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![GitHub License](https://img.shields.io/badge/license-${data.badges}-blue?style=flat&logo=appveyor) 
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

## Description

${renderImg(data.screenshot)}
${data.description}

## Installation

> ${data.installation}

## Usage

## Test 

> ${data.test}

## Contributes

[GitHub](https://github.com/${data.user})
[Email me with questions!](${data.email})
`;
}

module.exports = generateMarkdown;
