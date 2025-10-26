module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    commonjs: true, // <-- ¡Esta es la línea que arregla todo!
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "quotes": ["error", "double"],
    "indent": "off",
    "require-jsdoc": "off",
    "no-unused-vars": "warn",
    "no-undef": "error"
  },
};