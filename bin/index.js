#!/usr/bin/env node
const inquirer = require('inquirer');

const { Command } = require('commander');

const config = require('../lib/config.js');
const packageJson = require('../package.json');

const program = new Command();
program
  .version('rune version ' + packageJson.version, '-v, --version');

program
  .command('commit')
  .description('Create a new commit using given log message describing the changes.')
  .option('-m, --message <msg>', 'Use the given <msg> as the commit message.')
  .action((options) => {
    proceedWithCommit(options.message)
  })

program.parse(process.argv);

function proceedWithCommit(message) {
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
      const spawn = require('child_process').spawn;
      const process = spawn('git', ['commit', '-m', createConventionalCommitMessage(answers.type, message)]);

      process.stdout.setEncoding('utf8');
      process.stdout.on('data', function (data) {
        console.log(data);
      });

      process.stderr.on('data', function (data) {
        console.error(data);
      });
    });
}

function createConventionalCommitMessage(type, commitMessage) {
  return type + ': ' + commitMessage;
}
