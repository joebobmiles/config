# `@joebobmiles/eslint-config-typescript`

My personal configuration for TypeScript, extended from my basic config
([`@joebobmiles/config-eslint`](https://github.com/joebobmiles/config/tree/main/configs/eslint#readme)).
This adds a few things that get annoying when using the basic TypeScript config
provided by `@typescript-eslint`.

Install via:
```shell
$ npm i -D @joebobmiles/eslint-config-typescript
```

Use via:

```json
{
    ...,
    "eslintConfig": {
        "extends": [
            "@joebobmiles/eslint-config-typescript"
        ],
        ...
    },
    ...
}
```