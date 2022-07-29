module.exports = {
  branch: 'main',
  debug: 'false',
  plugins: [
      '@semantic-release/release-notes-generator',
      ['@semantic-release/changelog', {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog',
      }],
      ['@semantic-release/github']
   ]
};
