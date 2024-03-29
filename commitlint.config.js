module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-max-line-length': [1, 'always', 72],
        'footer-max-line-length': [1, 'always', 72],
        'header-max-length': [1, 'always', 52],
    },
};
