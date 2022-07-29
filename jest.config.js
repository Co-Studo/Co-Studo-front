const aliases = require('./aliases');

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: aliases.jest,
};
