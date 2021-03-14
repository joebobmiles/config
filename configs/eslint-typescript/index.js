/* global module, __dirname */
module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "tsconfigRootDir": __dirname,
    "project": [
      "./tsconfig.json"
    ],
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "@joebobmiles/eslint-config",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [ "error" ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-namespace": [
      "error",
      {
        "allowDeclarations": false,
        "allowDefinitionFiles": true,
      }
    ],
    /* Plugin rules */
    /* Core rules */
    "indent": "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "offsetTernaryExpressions": true,
      }
    ],
    "semi": "off",
    "@typescript-eslint/semi": [
      "error",
      "always",
      {
        "omitLastInOneLineBlock": true,
      }
    ],
    "brace-style": "off",
    "@typescript-eslint/brace-style": [
      "error",
      "allman",
      {
        "allowSingleLine": true,
      }
    ],
    /* Quote rules */
    "quotes": "off",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        "allowTemplateLiterals": true,
      }
    ],
    /* Spacing rules */
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": [
      "error",
      {
        "before": false,
        "after": true,
      }
    ],
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true,
      }
    ],
    /* Paren/bracket/brace rules */
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": [
      "error",
      "all",
      {
        "conditionalAssign": false,
        "returnAssign": false,
        "nestedBinaryExpressions": false,
        "ignoreJSX": "all",
        "enforceForArrowConditionals": false,
        "enforceForSequenceExpressions": false,
        "enforceForNewInMemberExpressions": false,
      }
    ],
    /* Variable declaration rules */
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": [
      "error",
      "always"
    ],
    /* Notation rules */
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": [
      "error",
      {
        "allowKeywords": true,
      }
    ],
    /* Function rules */
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",
    /* Miscellaneous rules */
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        "arrays": "never",
        "objects": "always",
        "imports": "always",
        "exports": "always",
        "functions": "never",
      }
    ],
  },
};