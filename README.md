# Drilldo

This is an experimental testing platform made by Brno University of Technology students from the Faculty of Electrical Engineering and Communications.

Simply upload your questions in the format shown [here](https://github.com/VUT-FEKT-IBE/Drilldo/blob/main/questionTemplate.json) and test to your heart's content.

## Recommended IDE Setup for development

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Compile, Minify and push built files for Production

```sh
cd tester
./deploy.sh
# deploy script automatically runs 'git add -A', so before you commit,
# check what's added and remove files that you don't want to have included
git commit -m "your preffered commit message"
git push
```
