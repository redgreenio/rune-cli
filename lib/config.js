// "Inspired" from - https://github.com/streamich/git-cz/blob/master/lib/defaults.js
const types = {
  feat: {
    description: 'A new feature',
    title: 'Features'
  },
  fix: {
    description: 'A bug fix',
    title: 'Bug Fixes'
  },
  docs: {
    description: 'Documentation only changes',
    title: 'Documentation'
  },
  test: {
    description: 'Adding missing tests',
    title: 'Tests'
  },
  refactor: {
    description: 'A code change that neither fixes a bug nor adds a feature',
    title: 'Code Refactoring'
  },
  style: {
    description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    title: 'Styles'
  },
  build: {
    description: 'Changes that affect the build system or external dependencies',
    title: 'Builds'
  },
  perf: {
    description: 'A code change that improves performance',
    title: 'Performance Improvements'
  },
  chore: {
    description: "Other changes that don't modify src or test files",
    title: 'Chores'
  },
  ci: {
    description: 'Changes to our CI configuration files and scripts',
    title: 'Continuous Integrations'
  },
  release: {
    description: 'Create a release commit',
    title: 'Releases'
  },
  revert: {
    description: 'Reverts a previous commit',
    title: 'Reverts'
  }
};

const typeToListItem = ({types}, type) => {
  const {description, _} = types[type];

  return {
    name: (type + ':').padEnd(12, ' ') + description,
    short: type + ': ' + description,
    value: type
  };
};

module.exports.choicesList = Object
  .keys(types)
  .map((type) => typeToListItem({types: types}, type));
