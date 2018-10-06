module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['babel', 'import'],
  env: {
    browser: true,
  },
  rules: {
    'babel/semi': 1,
  },
};
