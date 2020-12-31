module.exports = {
  "parser": `@typescript-eslint/parser`,
  "plugins": [
    `@typescript-eslint`
  ],
  "extends": [
    `plugin:@typescript-eslint/recommended`,
    `@joebobmiles/eslint-config`
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": `off`,
    "@typescript-eslint/no-namespace": [
      "error",
      "always",
      {
        "allowDeclarations": false,
        "allowDefinitionFiles": true
      }
    ]
  },
};