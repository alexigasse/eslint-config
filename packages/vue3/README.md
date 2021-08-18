# Opinionated eslint config for Vue 3

## Setup

Install eslint and the configuration package  
**npm:**
```
npm install eslint @alexigasse/eslint-config-vue3 --save-dev
```

**yarn:**
```
yarn add -D eslint @alexigasse/eslint-config-vue3
```

After you need to configure your `.eslintrc` file
```json
{
  "extends": [
    "@alexigasse/eslint-config-vue3"
  ]
}
```

## IDE settings recommandations
### VS Code
Install [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and add the below line to your workspace settings (`.vscode/settings.json`).
```json
{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
