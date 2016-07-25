"use strict"

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "script"
  },
  extends: "eslint:recommended",
  rules: {
    "indent": ["warn", 2],
    "quotes": ["warn", "double", "avoid-escape"],
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "never"],
    "no-unused-vars": ["warn", { "args": "none" }],
    "eqeqeq": ["error", "smart"],
    "strict": "error",
    "no-var": "error",
    "no-spaced-func":"warn",
    "eol-last": "warn",
    "camelcase": "warn",
    "space-before-function-paren": ["warn","never"],
    "no-debugger":"warn",
    "no-console":"warn"
  }
}
