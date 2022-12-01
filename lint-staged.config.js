module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --cache --fix', 'prettier --write'],
  '**/*.ts?(x)': () => 'tsc --noEmit',
};
