const ERROR = 2;
const MESSAGE_MAX_LENGTH = 140;

const TYPES = [
    'build',
    'chore',
    'ci',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'revert',
    'style',
    'test',
    'config',
    'tools'
];

module.exports = {
    extends: [ '@commitlint/config-conventional' ],
    rules: {
        'header-max-length': [ ERROR, 'always', MESSAGE_MAX_LENGTH ],
        'type-enum': [
            ERROR,
            'always',
            TYPES
        ]
    }
};
