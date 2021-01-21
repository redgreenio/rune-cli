// "Inspired" from - https://github.com/streamich/git-cz/blob/master/lib/defaults.js
const types = {
  feat: {
    description: 'A new feature',
    emoji: '🎸',
    value: 'feat'
  },
  fix: {
    description: 'A bug fix',
    emoji: '🐛',
    value: 'fix'
  },
  docs: {
    description: 'Documentation only changes',
    emoji: '✏️',
    value: 'docs'
  },
  test: {
    description: 'Adding missing tests',
    emoji: '💍',
    value: 'test'
  },
  refactor: {
    description: 'A code change that neither fixes a bug or adds a feature',
    emoji: '💡',
    value: 'refactor'
  },
  style: {
    description: 'Markup, white-space, formatting, missing semi-colons...',
    emoji: '💄',
    value: 'style'
  },
  perf: {
    description: 'A code change that improves performance',
    emoji: '⚡️',
    value: 'perf'
  },
  chore: {
    description: 'Build process or auxiliary tool changes',
    emoji: '🤖',
    value: 'chore'
  },
  ci: {
    description: 'CI related changes',
    emoji: '🎡',
    value: 'ci'
  },
  release: {
    description: 'Create a release commit',
    emoji: '🏹',
    value: 'release'
  }
};

const typeToListItem = ({types, disableEmoji}, type) => {
  const {description, emoji, value} = types[type];
  const prefix = emoji && !disableEmoji ? emoji + '  ' : '';

  return {
    name: prefix + (value + ':').padEnd(12, ' ') + description,
    short: value + ': ' + description,
    value
  };
};

module.exports.choicesList = Object
  .keys(types)
  .map((type) => typeToListItem({types: types, disableEmoji: true}, type));
