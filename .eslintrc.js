module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: ["eslint:recommended"],
  plugins: ["prettier", "import"],
  rules: {
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prettier/prettier": "warn",
    "prefer-arrow-callback": "warn",
  }
};
