# drilldo

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Compile and Minify for Production

```sh
bun build
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun lint
```

### Format with [Prettier](https://prettier.io/)

```sh
bun format
```

### Compile, Minify and push built files for Production

```sh
./deploy.sh
# deploy script automatically runs 'git add -A', so before you commit,
# check what's added and remove files that you don't want to have included
git commit -m "your preffered commit message"
git push
```
