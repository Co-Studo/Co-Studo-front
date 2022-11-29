module.exports = {
  '*.{js,jsx,ts,tsx}': 'eslint --cache --fix',
  '**/*.ts?(x)': () => 'tsc --noEmit',
};
