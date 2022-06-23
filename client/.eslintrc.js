module.exports = {
  root: true,
  ignorePatterns: ["projects/**/*"],
  overrides: [
    {
      files: ["*.ts"],
      "parserOptions": {
        "project": ["tsconfig.json"],
        "createDefaultProgram": true
      },
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended"
      ],
      "rules": {}
    },
    // NOTE: WE ARE NOT APPLYING PRETTIER IN THIS OVERRIDE, ONLY @ANGULAR-ESLINT/TEMPLATE
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    },
    // NOTE: WE ARE NOT APPLYING @ANGULAR-ESLINT/TEMPLATE IN THIS OVERRIDE, ONLY PRETTIER
    {
      "files": ["*.html"],
      "excludedFiles": ["*inline-template-*.component.html"],
      "extends": ["plugin:prettier/recommended"],
      "rules": {
        // NOTE: WE ARE OVERRIDING THE DEFAULT CONFIG TO ALWAYS SET THE PARSER TO ANGULAR (SEE BELOW)
        "prettier/prettier": ["error", { "parser": "angular" }]
      }
    }
  ]
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: './tsconfig.app.json',
  //   ecmaVersion: "latest",
  //   sourceType: 'module',
  // },
  // plugins: ['@typescript-eslint/eslint-plugin'],
  // extends: [
  //   'plugin:@angular-eslint/recommended',
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:prettier/recommended',
  // ],
  // root: true,
  // env: {
  //   node: true,
  //   jest: true,
  // },
  // ignorePatterns: ['.eslintrc.js'],
  // rules: {
  //   '@typescript-eslint/interface-name-prefix': 'off',
  //   '@typescript-eslint/explicit-function-return-type': 'off',
  //   '@typescript-eslint/explicit-module-boundary-types': 'off',
  //   '@typescript-eslint/no-explicit-any': 'off',
  // },
  // overrides: [
  //   {
  //   files: ["*.component.ts"],
  //   parser: "@typescript-eslint/parser",
  //   parserOptions: {
  //     project: "./tsconfig.app.json",
  //     ecmaVersion: 2020,
  //     sourceType: "module",
  //   },
  //   plugins: ["@angular-eslint/template"],
  //   processor: "@angular-eslint/template/extract-inline-html",
  // },
  //   {
  //     files: ["*.component.html"],
  //     parser: "@angular-eslint/template-parser",
  //     parserOptions: {
  //       project: "./tsconfig.app.json",
  //       ecmaVersion: 2020,
  //       sourceType: "module",
  //     },
  //     plugins: ["@angular-eslint/template"],
  //   }
  // ],
};
