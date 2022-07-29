const path = require('path');

// 1. 여기에 alias 추가
// 2. tsconfig.json 에 path 추가
const aliases = Object.entries({
  '@components': 'src/components',
  '@presenters': 'src/presenters',
});

const webpackAliases = Object.fromEntries(
  aliases.map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

const jestAliases = Object.fromEntries(
  aliases.map(([key, value]) => [`^${key}(.*)$`, `<rootDir>/${value}$1`]),
);

module.exports = {
  webpack: webpackAliases,
  jest: jestAliases,
};
