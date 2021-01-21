#!/usr/bin/env node
const inquirer = require('inquirer');
const config = require('../lib/config.js');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of change you are committing:',
      choices: config.choicesList,
    }
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
