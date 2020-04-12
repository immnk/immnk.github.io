# Portfolio

[![Build Status](https://travis-ci.com/immnk/immnk.github.io.svg?branch=dev)](https://travis-ci.com/immnk/immnk.github.io) [![Dependencies](https://david-dm.org/immnk/immnk.github.io.svg)](https://david-dm.org/) [![CodeFactor](https://www.codefactor.io/repository/github/immnk/immnk.github.io/badge)](https://www.codefactor.io/repository/github/immnk/immnk.github.io) [![Coverage Status](https://coveralls.io/repos/github/immnk/immnk.github.io/badge.svg?branch=dev)](https://coveralls.io/github/immnk/immnk.github.io?branch=dev) [![Tests](https://img.shields.io/badge/tests-covered-brightgreen.svg)](https://github.com/immnk/immnk.github.io/issues)

> Portfolio is a dev landing page created for Dev by Dev. It contains a minimal landing page which showcases talent of the dev and his capabilities for the entire dev lifecycle of a UI project from code, build, test and deploy with CI/CD. This project create `dist` folder during build and deploy its content to `master` using [![Travis CI](https://img.shields.io/badge/travis%20ci-enabled-brightgreen.svg)](https://travis-ci.com/immnk/immnk.github.io)

## Table of contents

1. [Set up](#set-up)
2. [Test](#test)
3. [Tasks](#tasks)
4. [Useful websites](#useful-websites)
5. [VS Code Plugins Recommended](#vs-code-plugins-recommended)
6. [LICENSE](#license)

## Set up

Follow the following steps:

1. `git clone https://github.com/immnk/immnk.github.io.git`
2. `cd immnk.github.io && npm install`
3. For testing in dev `npm start`. To test prod `NODE_ENV=production npm start`
4. Run `npm start` that would continue listening to changes in src and reload browser based on that.

## Test

1. Open webpack_testing folder where the code is cloned.
2. Open command prompt at the folder and run `npm test`

## Tasks

All tasks and issues are listed as items in [Tasks & issues in repository Issues tab](https://github.com/immnk/webpack-testing/issues)

- [x] Write a README file.
- [x] Make dist folder with html and js files compiled
- [x] Create SCSS and compile them with webpack
- [x] Add CI/CD pipelines
- [x] Create unit test cases with Mocha(JS test framework) and Chai(assertion library)

## VS Code Plugins Recommended

- Beautify
- Debugger for Chrome
- ESLint
- GitLens
- IntelliSense for CSS class names
- markdownlint
- vscode-icons

## Useful websites

1. Mock data - https://www.mockaroo.com/
2. Background generator - https://cssgradient.io/gradient-backgrounds/
3. Markdown tricks - https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

## License

[MIT License](https://github.com/immnk/webpack-testing/blob/master/LICENSE)
