# `@joebobmiles/config`

My personal configs for my JavaScript and TypeScript projects.

# Configs

## `@joebobmiles/eslint-config`

My personal ESLint config for use with my JavaScript projects. Extends the
recommended ESLint configuration, optimizing for readability and small commit
sizes.

### Install

```shell
npm install --save-dev @joebobmiles/eslint-config
```

### Use

Include in your ESLint configuration with the `extends` field:

```json
{
    "extends": [
        "@joebobmiles/eslint-config"
    ]
}
```

## `@joebobmiles/eslint-config-typescript`

My personal ESLint config for use with TypeScript. This extends
`@joebobmiles/eslint-config` with TypeScript specific rules. Also adds the
`@typescript-eslint` plugin, which it requires as a dependency.

### Install

```shell
npm install --save-dev @joebobmiles/eslint-config-typescript
```

### Use

Include in your ESLint configuration with the `extends` field:

```json
{
    "extends": [
        "@joebobmiles/eslint-config-typescript"
    ]
}
```

## `@joebobmiles/tsconfig`

My personal `tsconfig.json`. It's not much, but it's mine.

### Install

```shell
npm install --save-dev @joebobmiles/tsconfig
```

### Use

Include in your `tsconfig.json` with the `extends` field:

```json
{
    "extends": "@joebobmiles/tsconfig"
}
```

# License

All these configurations are released into the public domain, free of warranty
and released of liability, under the Unlicense:

> This is free and unencumbered software released into the public domain.
> 
> Anyone is free to copy, modify, publish, use, compile, sell, or
> distribute this software, either in source code form or as a compiled
> binary, for any purpose, commercial or non-commercial, and by any
> means.
> 
> In jurisdictions that recognize copyright laws, the author or authors
> of this software dedicate any and all copyright interest in the
> software to the public domain. We make this dedication for the benefit
> of the public at large and to the detriment of our heirs and
> successors. We intend this dedication to be an overt act of
> relinquishment in perpetuity of all present and future rights to this
> software under copyright law.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
> OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
> ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.
> 
> For more information, please refer to [<http://unlicense.org/>](http://unlicense.org/)