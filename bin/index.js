#!/usr/bin/env node
const inquirer = require('inquirer');
const config = require('../lib/config.js');

const typeToListItem = ({types, disableEmoji}, type) => {
  const {description, emoji, value} = types[type];
  const prefix = emoji && !disableEmoji ? emoji + '  ' : '';

  return {
    name: prefix + (value + ':').padEnd(12, ' ') + description,
    short: value + ': ' + description,
    value
  };
};

const choicesList = Object
  .keys(config.types)
  .map((type) => typeToListItem({types: config.types, disableEmoji: true}, type));

inquirer
  .prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of change you are committing:',
      choices: choicesList,
    }
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
