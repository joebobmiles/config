/* global module */
module.exports = {
  "ignorePatterns": [
    "node_modules/**",
    "dist/**",
    "build/**",
    ".**"
  ],
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    /* Core rules */
    "camelcase": "error",
    "indent": [
      "error",
      2,
      {
        "offsetTernaryExpressions": true,
      }
    ],
    "semi": [
      "error",
      "always"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "brace-style": [
      "error",
      "allman",
      {
        "allowSingleLine": true,
      }
    ],
    "max-len": [
      "warn",
      {
        "code": 80,
        "tabWidth": 2,
        "ignoreUrls": true,
        "ignoreRegExpLiterals": true,
      }
    ],
    /* Quote rules */
    "quotes": [
      "error",
      "double",
      {
        "allowTemplateLiterals": true,
      }
    ],
    "quote-props": [
      "error",
      "always"
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    /* Spacing rules */
    "array-bracket-spacing": [
      "error",
      "always"
    ],
    "array-bracket-newline": [
      "error",
      "consistent"
    ],
    "array-element-newline": [
      "error",
      "consistent"
    ],
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true,
      }
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true,
      }
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true,
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true,
      }
    ],
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": true,
      }
    ],
    "no-tabs": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "multiline": true,
          "consistent": true,
        },
        "ObjectPattern": {
          "multiline": true,
          "consistent": true,
        },
        "ImportDeclaration": {
          "consistent": true,
        },
        "ExportDeclaration": {
          "multiline": true,
          "consistent": true,
        },
      }
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "line": {
          "markers": [
            "/"
          ],
        },
        "block": {
          "exceptions": [
            "*"
          ],
          "balanced": true,
        },
      }
    ],
    /* Paren/bracket/brace rules */
    "arrow-parens": [
      "error",
      "always"
    ],
    "curly": [
      "error",
      "multi-or-nest"
    ],
    "wrap-regex": "error",
    "no-extra-parens": [
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
    /* Operator rules */
    "eqeqeq": [
      "error",
      "always"
    ],
    "operator-linebreak": [
      "error",
      "before",
      {
        "overrides": {
          "=": "after", // '=' at the start of a line looks weird.
        },
      }
    ],
    /* Variable declaration rules */
    "init-declarations": [
      "error",
      "never",
      {
        "ignoreForLoopInit": true,
      }
    ],
    "no-var": "error",
    "prefer-const": "error",
    "prefer-destructuring": [
      "error",
      {
        "array": true,
        "object": true,
      }
    ],
    /* Notation rules */
    "object-shorthand": [
      "error",
      "never"
    ],
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": [
      "error",
      {
        "allowKeywords": true,
      }
    ],
    /* String rules */
    "no-multi-str": "error",
    /* Function rules */
    "default-param-last": "error",
    "func-style": [
      "error",
      "declaration",
      {
        "allowArrowFunctions": true,
      }
    ],
    "function-call-argument-newline": [
      "error",
      "consistent"
    ],
    "function-paren-newline": [
      "error",
      "multiline"
    ],
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        "requireReturnForObjectLiteral": false,
      }
    ],
    "implicit-arrow-linebreak": [
      "error",
      "below"
    ],
    /* Miscellaneous rules */
    "no-invalid-this": "error",
    "no-confusing-arrow": "warn", // We want to know when we might be confusing.
    "no-useless-rename": "warn", // This should be obvious.
    "no-trailing-spaces": "error",
    "comma-dangle": [
      "error",
      {
        "arrays": "never",
        "objects": "always",
        "imports": "always",
        "exports": "always",
        "functions": "never",
      }
    ],
    "newline-per-chained-call": "error",
    "multiline-comment-style": [
      "error",
      "starred-block"
    ],
  },
};